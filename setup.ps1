# Script de Setup Automático - T3010DW Issues Tracker
# Execute em: C:\Users\59384\Documents\issues-tracker\
# Comando: powershell -ExecutionPolicy Bypass -File setup.ps1

Write-Host "==============================================="
Write-Host "  T3010DW Issues Tracker - Setup Automático"
Write-Host "==============================================="
Write-Host ""

# Detectar a pasta de origem (ajuste conforme necessário)
$possibleSources = @(
    "C:\Users\59384\OneDrive - Positivo\Documentos\PROJETOS\POSITIVO\T3010DW\ISSUES\Planejamento_Issues",
    "/mnt/user-data/outputs",
    "C:\Users\59384\Downloads",
    "C:\Users\59384\Desktop"
)

$sourceFound = $null

Write-Host "Procurando pasta com os arquivos..."
Write-Host ""

foreach ($source in $possibleSources) {
    if (Test-Path $source) {
        Write-Host "✓ Encontrada: $source"
        $sourceFound = $source
        break
    } else {
        Write-Host "✗ Não encontrada: $source"
    }
}

if (-not $sourceFound) {
    Write-Host ""
    Write-Host "❌ Nenhuma pasta encontrada!"
    Write-Host ""
    Write-Host "Digite o caminho completo da pasta com os arquivos:"
    $sourceFound = Read-Host "Caminho"
    
    if (-not (Test-Path $sourceFound)) {
        Write-Host "❌ Caminho inválido! Encerrando..."
        exit
    }
}

$destination = Get-Location
Write-Host ""
Write-Host "Origem: $sourceFound"
Write-Host "Destino: $destination"
Write-Host ""
Write-Host "Iniciando cópia..."
Write-Host ""

# Lista de arquivos a copiar
$files = @(
    "excel_to_json.py",
    "data.json",
    "package.json",
    "vite.config.js",
    "index.html",
    "README.md",
    "ARQUIVOS_CRIADOS.md"
)

# Lista de pastas a copiar
$folders = @(
    "src"
)

# Copiar arquivos
$copiedCount = 0
foreach ($file in $files) {
    $sourceFile = Join-Path $sourceFound $file
    if (Test-Path $sourceFile) {
        Copy-Item -Path $sourceFile -Destination $destination -Force
        Write-Host "✓ $file"
        $copiedCount++
    } else {
        Write-Host "⚠ $file (não encontrado)"
    }
}

Write-Host ""

# Copiar pastas
foreach ($folder in $folders) {
    $sourceFolder = Join-Path $sourceFound $folder
    if (Test-Path $sourceFolder) {
        $destFolder = Join-Path $destination $folder
        Copy-Item -Path $sourceFolder -Destination $destFolder -Recurse -Force
        Write-Host "✓ $folder/ (pasta)"
        $copiedCount++
    } else {
        Write-Host "⚠ $folder/ (não encontrada)"
    }
}

Write-Host ""
Write-Host "==============================================="
Write-Host "  Setup Concluído!"
Write-Host "==============================================="
Write-Host ""
Write-Host "Arquivos copiados: $copiedCount"
Write-Host ""
Write-Host "Próximo passo: git add ."
Write-Host ""

# Verificar se os arquivos estão lá
Write-Host "Verificando arquivos na pasta..."
Write-Host ""
Get-ChildItem -Path $destination | Format-Table Name

Write-Host ""
pause
