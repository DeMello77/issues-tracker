@echo off
setlocal enabledelayedexpansion

echo.
echo ========================================
echo   Diagnostico e Correcao de Build
echo ========================================
echo.

echo 1. Verificando estrutura de pastas...
if not exist "package.json" (
    echo [ERRO] package.json nao encontrado
    pause
    exit /b 1
)
echo [OK] package.json

if not exist "vite.config.js" (
    echo [ERRO] vite.config.js nao encontrado
    pause
    exit /b 1
)
echo [OK] vite.config.js

echo.
echo 2. Limpando caches e builds antigos...

if exist "dist" (
    rmdir /s /q dist
    echo [OK] dist deletado
)

if exist "node_modules" (
    echo Deletando node_modules (pode levar alguns minutos)...
    rmdir /s /q node_modules
    echo [OK] node_modules deletado
)

echo Limpando npm cache...
call npm cache clean --force
echo [OK] Cache npm limpo

echo.
echo 3. Reinstalando dependencias npm...
call npm install
if errorlevel 1 (
    echo [ERRO] Falha ao instalar dependencias
    pause
    exit /b 1
)
echo [OK] Dependencias instaladas

echo.
echo 4. Fazendo build do Vite...
call npm run build
if errorlevel 1 (
    echo [ERRO] Falha ao fazer build
    pause
    exit /b 1
)
echo [OK] Build concluido

echo.
echo 5. Verificando dist\index.html...
if not exist "dist\index.html" (
    echo [ERRO] dist\index.html nao existe
    pause
    exit /b 1
)
echo [OK] dist\index.html existe

echo.
echo 6. Fazendo push para GitHub...
call git add .
call git commit -m "Fix: clean rebuild"
call git push origin main

echo.
echo ========================================
echo   SUCESSO! Build OK
echo ========================================
echo.
echo Aguarde 3-5 minutos e acesse:
echo https://DeMello77.github.io/issues-tracker/
echo.
pause