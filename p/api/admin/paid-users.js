// Vercel Serverless Function: /p/api/admin/paid-users
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
    const paidUsers = [];
    
    for (const [email, userData] of userDatabase.entries()) {
      if (userData.has_premium) {
        paidUsers.push({
          email,
          user_id: userData.user_id,
          payment_id: userData.payment_id,
          payment_date: userData.last_login,
          last_login: userData.last_login
        });
      }
    }
    
    res.json({ users: paidUsers });
  } catch (error) {
    console.error('Error getting paid users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}