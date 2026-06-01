@echo off
REM ========================================
REM T3010DW Issues Tracker - Setup Automatizado
REM ========================================

echo.
echo ========================================
echo  T3010DW Issues Tracker Setup
echo ========================================
echo.

REM Passo 1: Validar usuário GitHub
echo [1/5] Configurando credenciais Git...
set /p github_user="Digite seu GitHub username: "
set /p github_email="Digite seu email GitHub: "

git config --global user.name "%github_user%"
git config --global user.email "%github_email%"

echo ✓ Credenciais configuradas

echo.
echo [2/5] Inicializando repositório Git...
git init
git branch -M main

echo ✓ Repositório Git inicializado

echo.
echo [3/5] Adicionando arquivos...
git add .

echo ✓ Arquivos adicionados

echo.
echo [4/5] Primeiro commit...
git commit -m "Initial commit: Issues Tracker setup"

echo ✓ Commit realizado

echo.
echo ========================================
echo  PRÓXIMOS PASSOS (MANUAL NO GITHUB)
echo ========================================
echo.
echo 1. Acesse: https://github.com/new
echo.
echo 2. Preencha:
echo    - Repository name: issues-tracker
echo    - Description: T3010DW Issues Tracker Dashboard
echo    - Visibility: Public (marque)
echo    - Add .gitignore: Node (selecione)
echo.
echo 3. Clique: Create repository
echo.
echo 4. Volte aqui e digite:
echo.
set /p github_repo="Cole a URL do repositório (https://github.com/seu-usuario/issues-tracker.git): "

echo.
echo [5/5] Conectando ao GitHub e fazendo Push...
echo.

git remote add origin %github_repo%
git push -u origin main

echo.
echo ✅ SUCESSO! Repositório está online!
echo.
echo Dashboard estará disponível em:
echo https://%github_user%.github.io/issues-tracker/
echo.
echo (Aguarde 1-2 minutos para GitHub Pages ativar)
echo.
pause
