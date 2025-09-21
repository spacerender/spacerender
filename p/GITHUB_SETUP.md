# GitHub Setup Guide for SketchUp Models 🚀

## 📋 Quick Setup (5 Steps)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and login
2. Click "New Repository" (green button)
3. Repository name: `sketchup-models` (or any name you prefer)  
4. Make it **Public** (so files can be downloaded)
5. Check "Add a README file"
6. Click "Create repository"

### Step 2: Create Folder Structure
In your new repository, create this folder structure:

```
sketchup-models/
├── residential/          # Houses, apartments, villas
├── commercial/           # Offices, shops, restaurants  
├── interior/             # Room layouts, furniture
├── landscaping/          # Gardens, outdoor spaces
├── industrial/           # Warehouses, factories
└── thumbnails/           # Preview images (300x200px)
```

**How to create folders on GitHub:**
1. Click "Add file" → "Create new file"
2. Type: `residential/README.md`
3. Add some text like "Residential SketchUp models"
4. Click "Commit new file"
5. Repeat for other folders

### Step 3: Upload Your .skp Files
1. Go to the appropriate folder (e.g., `residential/`)
2. Click "Add file" → "Upload files"
3. Drag & drop your .skp files
4. Add commit message: "Add new SketchUp models"
5. Click "Commit changes"

### Step 4: Update models.html
Replace these values in your `models.html` file:

```javascript
github: {
  username: "YOUR_ACTUAL_GITHUB_USERNAME",    // Replace with your GitHub username
  repository: "sketchup-models",              // Your repository name
  branch: "main"                              // Usually "main" or "master"
}
```

### Step 5: Test Your Setup
1. Open `models.html` in your browser
2. Login and complete payment
3. Check if your models appear automatically!

---

## 📁 File Organization Examples

### Good File Names:
- `modern-villa-2023.skp`
- `office-building-complex.skp`
- `living-room-scandinavian.skp`
- `garden-landscape-design.skp`

### Repository Structure Example:
```
sketchup-models/
├── residential/
│   ├── modern-villa-2023.skp
│   ├── traditional-house.skp
│   └── apartment-layout.skp
├── commercial/
│   ├── office-building-complex.skp
│   ├── retail-store-design.skp
│   └── restaurant-interior.skp
├── interior/
│   ├── living-room-scandinavian.skp
│   ├── modern-kitchen.skp
│   └── bedroom-minimalist.skp
└── thumbnails/
    ├── modern-villa-2023.jpg
    ├── office-building-complex.jpg
    └── living-room-scandinavian.jpg
```

---

## 🖼️ Adding Thumbnails (Optional but Recommended)

### Option 1: SketchUp Screenshots
1. Open your .skp file in SketchUp
2. Set a good camera angle
3. Go to File → Export → 2D Graphic
4. Choose JPEG, set size to 300x200 pixels
5. Save as `model-name.jpg`
6. Upload to `thumbnails/` folder on GitHub

### Option 2: Auto-Generated Placeholders
The system will automatically create placeholder thumbnails if you don't upload custom ones.

---

## 🔄 Auto-Update Feature

Your system now includes **GitHub API integration** that will:

✅ **Automatically detect** new .skp files you upload  
✅ **Auto-generate** model entries  
✅ **Organize by folder** (folder name becomes category)  
✅ **Create download links** instantly  
✅ **No manual coding** required for new files!

### How It Works:
```
You upload → GitHub stores → API detects → Website updates → Users see new models
```

---

## 📤 Adding New Models (3 Ways)

### Method 1: Automatic (GitHub API) ⭐ **Recommended**
1. Upload .skp file to appropriate folder on GitHub
2. Refresh your models page
3. New model appears automatically!

### Method 2: Upload Manager Tool
1. Upload .skp file to GitHub first
2. Open `upload-manager.html`
3. Fill in the details
4. Copy generated code to `models.html`

### Method 3: Manual Code Addition
Add to the `models` array in `models.html`:

```javascript
{
  id: 4,
  name: "Your New Model",
  description: "Description of your model",
  size: "3.5 MB",
  category: "Residential",
  tags: ["modern", "house", "residential"],
  thumbnail: "https://raw.githubusercontent.com/YOUR_USERNAME/sketchup-models/main/thumbnails/your-model.jpg",
  downloadUrl: "https://github.com/YOUR_USERNAME/sketchup-models/raw/main/residential/your-model.skp",
  previewUrl: "https://github.com/YOUR_USERNAME/sketchup-models/blob/main/residential/your-model.skp",
  dateAdded: "2024-01-30"
},
```

---

## 🎯 GitHub URL Patterns

### For Download (Direct .skp file):
```
https://github.com/USERNAME/REPO/raw/main/FOLDER/FILE.skp
```

### For Preview (GitHub page):
```
https://github.com/USERNAME/REPO/blob/main/FOLDER/FILE.skp
```

### For Thumbnails:
```
https://raw.githubusercontent.com/USERNAME/REPO/main/thumbnails/FILE.jpg
```

---

## ⚡ Quick Example Setup

Let's say your GitHub username is `johnsmith`:

1. **Create repo**: `johnsmith/sketchup-models`
2. **Upload file**: `residential/modern-house.skp`
3. **Update models.html**:
   ```javascript
   github: {
     username: "johnsmith",
     repository: "sketchup-models", 
     branch: "main"
   }
   ```
4. **File URLs become**:
   - Download: `https://github.com/johnsmith/sketchup-models/raw/main/residential/modern-house.skp`
   - Preview: `https://github.com/johnsmith/sketchup-models/blob/main/residential/modern-house.skp`

---

## 🔧 Troubleshooting

### Models Not Showing?
- ✅ Check your GitHub username in `models.html`
- ✅ Make sure repository is **Public**
- ✅ Verify folder names match file paths
- ✅ Check browser console for errors

### Download Not Working?
- ✅ Use `/raw/` in download URLs (not `/blob/`)
- ✅ Make sure files uploaded successfully
- ✅ Test URLs directly in browser

### Large Files (>100MB)?
- ✅ Use Git LFS (Large File Storage)
- ✅ Or compress your .skp files
- ✅ Consider splitting complex models

---

## 💡 Pro Tips

### Optimize File Sizes:
- Remove unused components in SketchUp
- Use "Purge Unused" feature
- Optimize textures
- Keep models under 50MB for faster downloads

### Better Organization:
- Use consistent naming: `category-modelname-version.skp`
- Add version numbers: `v1`, `v2`, etc.
- Group related models in subfolders
- Keep thumbnails updated

### SEO Friendly:
- Use descriptive file names
- Add good descriptions
- Use relevant tags
- Keep models organized by category

---

## 🎉 You're All Set!

Your GitHub-powered SketchUp hosting system is ready! Here's what happens next:

1. **Upload** your first .skp files to GitHub
2. **Update** your models.html with your GitHub username  
3. **Test** the complete flow
4. **Add more models** - they'll appear automatically!

**Benefits of GitHub hosting:**
- ✅ **Free** unlimited public repositories
- ✅ **Reliable** 99.9% uptime
- ✅ **Fast** global CDN
- ✅ **Version control** for your models
- ✅ **API access** for auto-updates
- ✅ **No bandwidth limits**

Start uploading your SketchUp models and watch your premium library grow! 🚀