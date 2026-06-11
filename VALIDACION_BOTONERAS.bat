@echo off
echo Cerrando servidor anterior si existe...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 1 >nul
echo Iniciando servidor...
start "" http://localhost:3000
node server.js
pause