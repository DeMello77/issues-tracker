@echo off
REM Setup automatico para Issues Tracker - T3010DW
REM Execute este arquivo na pasta issues-tracker

echo.
echo ====================================
echo  T3010DW Issues Tracker - Setup
echo ====================================
echo.

REM Se os arquivos estao em uma pasta compartilhada ou unidade de rede
REM Ajuste este caminho para onde estao seus arquivos:
set SOURCE=C:\Users\59384\OneDrive - Positivo\Documentos\PROJETOS\POSITIVO\T3010DW\ISSUES\Planejamento_Issues

REM Destino (pasta atual)
set DEST=%CD%

echo Copiando arquivos de:
echo %SOURCE%
echo.
echo Para:
echo %DEST%
echo.

REM Copiar todos os arquivos
xcopy "%SOURCE%\*.*" "%DEST%" /Y /E /I /G /H /R /K /O /X

echo.
echo ====================================
echo  Arquivos copiados com sucesso!
echo ====================================
echo.

REM Listar o que foi copiado
echo Arquivos na pasta:
echo.
dir

echo.
pause
