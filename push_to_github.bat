@echo off
cd /d "D:\Gen ai & projects\look took web\website"

echo [1/5] Initializing Git repository if needed...
git init

echo [2/5] Setting Git remote...
git remote remove origin 2>nul
git remote add origin https://github.com/AdvetGupta/Shop-website-looktook.git

echo [3/5] Staging files...
git add .

echo [4/5] Committing changes...
git commit -m "Look Took Jewellers - Premium Luxury Showroom Website"

echo [5/5] Pushing to GitHub (main branch)...
git branch -M main
git push -u origin main

echo.
echo ==============================================
echo If Git asks for credentials, please sign in.
echo All files from website/ have been pushed!
echo ==============================================
pause
