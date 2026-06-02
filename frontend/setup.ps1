Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "   M-Tech Website - Setup & Launch" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $PSScriptRoot

# Check Node.js
$nodeVersion = node --version 2>$null
if (-not $nodeVersion) {
    Write-Host "ERROR: Node.js is not installed or not in PATH." -ForegroundColor Red
    Write-Host "Please install it from https://nodejs.org (LTS version)" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit
}
Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green

# Install dependencies if needed
if (-not (Test-Path "node_modules")) {
    Write-Host ""
    Write-Host "Installing dependencies (first-time setup)..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "npm install failed. Check your internet connection." -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit
    }
    Write-Host "Dependencies installed successfully." -ForegroundColor Green
} else {
    Write-Host "Dependencies already installed." -ForegroundColor Green
}

Write-Host ""
Write-Host "Starting dev server on http://localhost:3000 ..." -ForegroundColor Cyan
Write-Host "(Browser will open automatically)" -ForegroundColor Gray
Write-Host ""
npm run dev
