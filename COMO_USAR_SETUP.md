# 🚀 Como Usar o Script de Setup

**Este script automatiza 80% do processo!**

---

## 📋 **O que o Script Faz**

1. ✅ Configura suas credenciais Git
2. ✅ Inicializa repositório local
3. ✅ Adiciona todos os arquivos
4. ✅ Faz primeiro commit
5. 🔗 Conecta ao GitHub
6. 📤 Faz push dos arquivos

**Você precisa fazer**: Criar o repositório no GitHub (5 min) + executar script

---

## 🔧 **PRÉ-REQUISITOS**

Certifique-se que tem:

### **Windows**:
- Git instalado: https://git-scm.com
- PowerShell ou CMD

### **Mac/Linux**:
- Git instalado (geralmente já vem)
- Terminal

---

## 📍 **PASSO A PASSO COMPLETO**

### **Fase 1: Preparar Pasta Local**

#### Windows:

```bash
# Abra PowerShell ou CMD
cd Desktop
mkdir issues-tracker
cd issues-tracker
```

#### Mac/Linux:

```bash
cd ~/Desktop
mkdir issues-tracker
cd issues-tracker
```

### **Fase 2: Copiar Arquivos**

Copie todos os arquivos de `/mnt/user-data/outputs/` para a pasta `issues-tracker/`:

```
issues-tracker/
├─ setup.bat (ou setup.sh no Mac/Linux)
├─ setup.sh
├─ T3010DW_Issues_Tracker.xlsx
├─ excel_to_json.py
├─ data.json
├─ README.md
├─ package.json
├─ vite.config.js
├─ index.html
├─ .gitignore (se não tiver, crie vazio)
└─ src/
   └─ (todos os arquivos)
```

### **Fase 3: Criar Repositório no GitHub** (MANUAL)

1. Abra: https://github.com/new
2. Preencha:
   - **Repository name**: `issues-tracker`
   - **Description**: `T3010DW Issues Tracker Dashboard`
   - **Visibility**: Public ✓
   - **Add .gitignore**: Node ✓
3. Clique: **Create repository**
4. **COPIE A URL** que aparecerá (algo como `https://github.com/seu-usuario/issues-tracker.git`)

---

## ▶️ **EXECUTAR O SCRIPT**

### **Windows**:

1. Abra **PowerShell** ou **CMD**
2. Navegue até a pasta:
   ```bash
   cd Desktop\issues-tracker
   ```

3. Execute o script:
   ```bash
   .\setup.bat
   ```

4. O script vai pedir:
   - **GitHub username**: seu username do GitHub
   - **Email GitHub**: seu email do GitHub
   - **URL do repositório**: Cole a URL que copiou (https://github.com/seu-usuario/issues-tracker.git)

### **Mac/Linux**:

1. Abra **Terminal**
2. Navegue até a pasta:
   ```bash
   cd ~/Desktop/issues-tracker
   ```

3. Dê permissão de execução:
   ```bash
   chmod +x setup.sh
   ```

4. Execute o script:
   ```bash
   ./setup.sh
   ```

5. O script vai pedir as mesmas informações

---

## ⚠️ **O Script Pode Pedir GitHub Token**

Se pedir "password" ou "token", você precisa criar um:

### **Criar GitHub Token**:

1. Acesse: https://github.com/settings/tokens
2. Clique: **Generate new token (classic)**
3. Marque: `repo` (acesso completo a repositórios)
4. Clique: **Generate token**
5. **COPIE O TOKEN** (mostra só uma vez!)
6. Cole no terminal quando pedir

---

## ✅ **Se Tudo Funcionar**

Você verá:

```
✓ Credenciais configuradas
✓ Repositório Git inicializado
✓ Arquivos adicionados
✓ Commit realizado
[5/5] Conectando ao GitHub e fazendo Push...
✅ SUCESSO! Repositório está online!

Dashboard estará disponível em:
https://seu-usuario.github.io/issues-tracker/
```

---

## 🔧 **Próximas Etapas (Após Script)**

### **1. Instalar Node.js (npm)**

```bash
npm install
```

### **2. Build**

```bash
npm run build
```

### **3. Ativar GitHub Pages**

1. Acesse: https://github.com/seu-usuario/issues-tracker
2. **Settings** → **Pages**
3. **Build and deployment**:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "root"
4. **Save**
5. Aguarde 1-2 minutos

### **4. Acessar Dashboard**

Abra no navegador:
```
https://seu-usuario.github.io/issues-tracker/
```

---

## 🐛 **Se Algo Deu Errado**

### **Erro: "Git not found"**
- Instale Git: https://git-scm.com

### **Erro: "npm not found"**
- Instale Node.js: https://nodejs.org

### **Script não executa (Windows)**
- Execute como Administrador
- Se PowerShell recusar, rode no CMD

### **Script não executa (Mac/Linux)**
- Use `chmod +x setup.sh` primeiro
- Tente com `bash setup.sh` ao invés de `./setup.sh`

### **GitHub pede token mas não funciona**
- Token expirou? Crie novo
- Verificar se copiou tudo correto

---

## 📞 **Resumo dos Comandos**

```bash
# 1. Ir para pasta
cd Desktop/issues-tracker

# 2. Copiar arquivos (manual)

# 3. Executar script
.\setup.bat              # Windows
./setup.sh               # Mac/Linux

# 4. Instalar dependências
npm install

# 5. Build
npm run build

# 6. Ativar GitHub Pages (no website GitHub)

# 7. Acessar
# https://seu-usuario.github.io/issues-tracker/
```

---

**Pronto! Dashboard está online.** 🎉
