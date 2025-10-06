@echo off
echo Initializing Git repository for Neat Sheet Metal website...
echo.

git init
git add .
git commit -m "Initial commit: Neat Sheet Metal website with responsive design and contact features"

echo.
echo Git repository initialized successfully!
echo.
echo Next steps:
echo 1. Create a new repository on GitHub
echo 2. Copy the repository URL
echo 3. Run: git remote add origin [YOUR_GITHUB_REPO_URL]
echo 4. Run: git push -u origin main
echo.
pause