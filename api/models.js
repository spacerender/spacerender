// Vercel Serverless Function: /api/models
// In-memory storage (replace with real database)
const userDatabase = new Map();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { user_email } = req.query;
    
    if (!user_email) {
      return res.status(400).json({ 
        error: 'User email required',
        message: 'Please provide user_email parameter' 
      });
    }
    
    // Check if user has premium access
    const user = userDatabase.get(user_email);
    if (!user || !user.has_premium) {
      return res.status(403).json({ 
        error: 'Premium access required',
        message: 'Please complete payment to access models' 
      });
    }
    
    // Fetch from GitHub API
    const githubResponse = await fetch(
      'https://api.github.com/repos/spacerender/sketchup-models/git/trees/main?recursive=1'
    );
    
    if (!githubResponse.ok) {
      throw new Error(`GitHub API error: ${githubResponse.status}`);
    }
    
    const data = await githubResponse.json();
    
    // Filter and process .skp files
    const skpFiles = data.tree.filter(file => 
      file.path.endsWith('.skp') && file.type === 'blob'
    );
    
    const models = skpFiles.map(file => {
      const pathParts = file.path.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const category = pathParts[0] || 'Uncategorized';
      const modelName = fileName.replace('.skp', '').replace(/[-_]/g, ' ');
      
      return {
        id: `github_${file.sha.substring(0, 8)}`,
        name: modelName.charAt(0).toUpperCase() + modelName.slice(1),
        description: `SketchUp model from ${category} collection`,
        size: "GitHub hosted",
        category: category.charAt(0).toUpperCase() + category.slice(1),
        tags: ["sketchup", "model", category.toLowerCase()],
        thumbnail: `https://raw.githubusercontent.com/spacerender/sketchup-models/main/thumbnails/${fileName.replace('.skp', '')}.jpg`,
        downloadUrl: `https://github.com/spacerender/sketchup-models/raw/main/${file.path}`,
        previewUrl: `https://github.com/spacerender/sketchup-models/blob/main/${file.path}`,
        dateAdded: new Date().toISOString().split('T')[0]
      };
    });
    
    res.json({ models });
    
  } catch (error) {
    console.error('Error fetching models:', error);
    res.status(500).json({ 
      error: 'Failed to fetch models',
      message: error.message 
    });
  }
}