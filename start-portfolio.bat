@echo off
title Rami Portfolio - Dev Server
color 0B
echo.
echo  ============================================
echo    Rami Laouini Portfolio - Starting...
echo  ============================================
echo.
echo  Starting the development server...
echo  Your portfolio will open in the browser shortly.
echo.
echo  Press Ctrl+C to stop the server.
echo  ============================================
echo.

cd /d "%~dp0"

:: Open browser after a short delay
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3000"

:: Start the dev server
npm run dev
