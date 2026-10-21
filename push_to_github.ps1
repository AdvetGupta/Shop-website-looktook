Set-Location -LiteralPath "D:\Gen ai & projects\look took web\website"

Write-Host "Initializing Git repo..." -ForegroundColor Cyan
git init

Write-Host "Configuring remote origin..." -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin https://github.com/AdvetGupta/Shop-website-looktook.git

Write-Host "Staging all files..." -ForegroundColor Cyan
git add .

Write-Host "Creating commit..." -ForegroundColor Cyan
git commit -m "Look Took Jewellers - Premium Luxury Showroom Website"

Write-Host "Setting main branch..." -ForegroundColor Cyan
git branch -M main

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main
