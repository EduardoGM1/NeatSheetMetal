# Deployment Instructions

## 📋 Prerequisites
- Git installed on your computer
- GitHub account
- Render account (free)

## 🚀 Step-by-Step Deployment

### 1. Setup Git Repository
```bash
# Navigate to project folder
cd "neat sheet"

# Run the setup script (Windows)
setup-git.bat

# Or manually:
git init
git add .
git commit -m "Initial commit: Neat Sheet Metal website"
```

### 2. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name: `neat-sheet-metal`
4. Description: `Professional sheet metal services website for Toronto`
5. Keep it public
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 3. Connect Local to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/neat-sheet-metal.git
git branch -M main
git push -u origin main
```

### 4. Deploy to Render
1. Go to [Render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New +" → "Static Site"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `neat-sheet-metal`
   - **Branch**: `main`
   - **Build Command**: (leave empty)
   - **Publish Directory**: `./`
6. Click "Create Static Site"

### 5. Custom Domain (Optional)
1. In Render dashboard, go to your site
2. Click "Settings" → "Custom Domains"
3. Add your domain
4. Update DNS records as instructed

## 🔄 Updates
To update the website:
```bash
git add .
git commit -m "Update: description of changes"
git push
```
Render will automatically redeploy.

## 🌐 Live URLs
- **Render URL**: https://neat-sheet-metal.onrender.com
- **Custom Domain**: (if configured)

## 📞 Support
For deployment issues, contact the developer or check:
- [Render Documentation](https://render.com/docs)
- [GitHub Documentation](https://docs.github.com)