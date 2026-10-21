@echo off
cd /d "D:\Gen ai & projects\look took web\website"
git add .
git commit -m "Update navbar label to New"
git push origin main
echo.
echo ====================================
echo Changes pushed to GitHub and Vercel!
echo ====================================
timeout /t 5
