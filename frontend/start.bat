@echo off
echo ============================================
echo   M-Tech Website - Starting Dev Server
echo ============================================
echo.
cd /d %~dp0
if not exist node_modules (
    echo Installing dependencies... (this may take a minute)
    npm install
    echo.
)
echo Starting dev server...
echo The site will open automatically in your browser.
echo.
npm run dev
pause
