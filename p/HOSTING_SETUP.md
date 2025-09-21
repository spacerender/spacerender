# SketchUp Files Hosting Setup Guide

## 🎯 Overview
This guide shows you how to host your .skp files and set up auto-updating download links for your premium users.

## 📋 Hosting Options

### Option 1: Google Drive (Recommended) ⭐
**Best for**: Easy setup, large files, automatic updates

#### Step 1: Create Google Drive Folder
1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder called "Premium SketchUp Models"
3. Right-click folder → Share → Change to "Anyone with the link can view"
4. Copy the folder ID from URL: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`

#### Step 2: Get Google Drive API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project or select existing
3. Enable "Google Drive API"
4. Create API Key (Credentials → Create Credentials → API Key)
5. Restrict the API key to Google Drive API only

#### Step 3: Upload Your .skp Files
1. Upload .skp files to your Google Drive folder
2. For each file, right-click → Share → Copy link
3. Extract file ID from link: `https://drive.google.com/file/d/FILE_ID_HERE/view`

#### Step 4: Update models.html
Replace these values in `models.html`:
```javascript
googleDrive: {
  folderId: "YOUR_FOLDER_ID_HERE", // From Step 1
  apiKey: "YOUR_API_KEY_HERE" // From Step 2
},
```

### Option 2: GitHub (Free Alternative) 💰
**Best for**: Version control, free hosting, smaller files (<100MB)

#### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Create new repository: "sketchup-models"
3. Make it public or private (private requires authentication)

#### Step 2: Upload Files
1. Create folder structure:
```
sketchup-models/
├── residential/
├── commercial/
├── interior/
└── landscaping/
```
2. Upload .skp files to appropriate folders
3. Get raw download URLs for each file

#### Step 3: Update models.html
Add your GitHub files to the models array:
```javascript
{
  id: 4,
  name: "Your Model Name",
  downloadUrl: "https://github.com/username/sketchup-models/raw/main/folder/file.skp",
  // ... other properties
}
```

### Option 3: Dedicated File Hosting 🚀
**Best for**: Professional setup, custom domain

Popular services:
- **AWS S3** - Pay per usage, very reliable
- **DigitalOcean Spaces** - $5/month, simple setup
- **Cloudflare R2** - Cheap storage, fast delivery

## 🔄 Auto-Update System

### Method 1: Google Drive API (Automatic)
When configured properly, the system will:
1. Automatically detect new .skp files in your folder
2. Display them on the models page
3. Generate download links automatically

### Method 2: Manual Update (Simple)
1. Upload new .skp file to your hosting service
2. Get the download URL
3. Add entry to `models.html`:

```javascript
// Add this to the models array in models.html
{
  id: 999, // Use next available ID
  name: "New Model Name",
  description: "Description of your new model",
  size: "File size",
  category: "Category (Residential/Commercial/Interior)",
  tags: ["tag1", "tag2", "tag3"],
  thumbnail: "https://path-to-thumbnail-image.jpg",
  downloadUrl: "https://your-download-url-here",
  previewUrl: "https://your-preview-url-here",
  dateAdded: "2024-01-30"
}
```

### Method 3: Automated with Webhook 🤖
Set up automated updates using webhooks:

```javascript
// Add this to your models.html for webhook support
async function checkForUpdates() {
  try {
    const response = await fetch('https://your-webhook-url.com/api/models');
    const newModels = await response.json();
    displayModels(newModels);
  } catch (error) {
    console.log('Using cached models');
    displayModels(MODELS_CONFIG.models);
  }
}
```

## 📁 File Organization Best Practices

### Folder Structure
```
Premium Models/
├── Residential/
│   ├── Modern Houses/
│   ├── Traditional Houses/
│   └── Apartments/
├── Commercial/
│   ├── Offices/
│   ├── Retail/
│   └── Restaurants/
├── Interior/
│   ├── Living Rooms/
│   ├── Kitchens/
│   └── Bedrooms/
└── Landscaping/
    ├── Gardens/
    └── Outdoor Spaces/
```

### File Naming Convention
```
Category_ModelName_Version.skp

Examples:
- Residential_ModernHouse_v1.skp
- Commercial_OfficeBuilding_v2.skp
- Interior_LivingRoom_Scandinavian_v1.skp
```

## 🎨 Adding Thumbnails

### Option 1: SketchUp Screenshots
1. Open model in SketchUp
2. Set good camera angle
3. Export as image (PNG/JPG)
4. Upload to same hosting service
5. Use image URL as thumbnail

### Option 2: Auto-Generated (Google Drive)
Google Drive automatically generates thumbnails for SketchUp files.

### Option 3: Custom Thumbnails
Create custom 300x200px thumbnails showing:
- Model preview
- Category badge
- File size indicator

## 🔧 Advanced Features

### Download Analytics
Track which models are downloaded most:

```javascript
function trackDownload(modelName) {
  // Send to Google Analytics
  gtag('event', 'download', {
    'event_category': 'models',
    'event_label': modelName
  });
  
  // Or send to your own analytics
  fetch('/api/track-download', {
    method: 'POST',
    body: JSON.stringify({ model: modelName, user: currentUser.email })
  });
}
```

### Search and Filter
The system includes:
- ✅ Search by name/tags
- ✅ Filter by category
- ✅ Sort by date/size
- ✅ Grid/list view toggle

### User Favorites
Add favorite functionality:

```javascript
function toggleFavorite(modelId) {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const index = favorites.indexOf(modelId);
  
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(modelId);
  }
  
  localStorage.setItem('favorites', JSON.stringify(favorites));
  updateFavoriteButtons();
}
```

## 🚀 Quick Start (5 Minutes)

1. **Upload to Google Drive**
   - Create folder, upload 3-5 .skp files
   - Make folder public, copy folder ID

2. **Get API Key**
   - Google Cloud Console → Enable Drive API → Create API Key

3. **Update models.html**
   - Replace `YOUR_GOOGLE_DRIVE_FOLDER_ID`
   - Replace `YOUR_GOOGLE_DRIVE_API_KEY`

4. **Test**
   - Open models.html in browser
   - Check if files load automatically

## 📊 File Size Recommendations

- **Small Models**: < 5MB (Quick download)
- **Medium Models**: 5-20MB (Detailed models)
- **Large Models**: 20-100MB (Complex scenes)
- **Huge Models**: 100MB+ (Use compression or split)

### Compression Tips
- Remove unused components
- Optimize textures
- Use SketchUp's "Purge Unused" feature
- Consider offering multiple quality levels

## 🔒 Security Considerations

### Access Control
- ✅ Payment verification before download
- ✅ User authentication required
- ✅ Download link expiration (optional)

### File Protection
- Use signed URLs for sensitive content
- Implement download limits per user
- Add watermarks to preview images

## 📈 Scaling Up

### When you have 100+ models:
1. Implement pagination
2. Add advanced search/filters
3. Create model collections
4. Add user reviews/ratings
5. Implement download history

### Database Option
For large collections, consider using:
- Firebase Firestore (easy setup)
- MySQL/PostgreSQL (traditional)
- MongoDB (document-based)

---

## 🎉 You're Ready!

Your SketchUp hosting system is now set up to:
- ✅ Host unlimited .skp files
- ✅ Auto-update when new files added
- ✅ Provide secure access to premium users
- ✅ Track downloads and usage
- ✅ Scale as your collection grows

**Next Steps:**
1. Choose your hosting method (Google Drive recommended)
2. Upload your first batch of models
3. Update the configuration in models.html
4. Test the complete flow
5. Start adding more models!

**Need Help?**
- Check the browser console for errors
- Test with 1-2 files first
- Verify all URLs are accessible
- Make sure API keys are correct