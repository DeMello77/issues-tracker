# 🚀 Guia Rápido: Setup e Deploy

## Passo 0: Criar Repositório no GitHub

### 0.1 - Acessar GitHub

1. Abra https://github.com
2. Faça login com sua conta
3. Se não tem conta, crie uma em https://github.com/signup

### 0.2 - Criar Novo Repositório

1. Clique no **+** no canto superior direito
2. Selecione **New repository**

### 0.3 - Configurar o Repositório

Preencha os campos **EXATAMENTE** assim:

| Campo | Valor |
|-------|-------|
| Repository name | `issues-tracker` |
| Description | `T3010DW Issues Tracker Dashboard` |
| Visibility | **Public** ✓ |
| Add .gitignore | **Node** ✓ |
| Add a license | (deixe em branco) |

**Importante**: NÃO marque "Initialize with README" (vamos usar o nosso)

Clique em: **Create repository**

### 0.4 - Você Verá uma Página de Setup

GitHub vai mostrar comandos. **Copie e guarde esse bloco**:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/issues-tracker.git
git push -u origin main
```

(Substitua `seu-usuario` pelo seu username do GitHub)

---

## Passo 1: Preparar Repositório Localmente

### 1.1 - Abrir Terminal

**Windows**:
- Tecla `Windows + R` → digite `cmd` → Enter

**Mac**:
- `Cmd + Espaço` → digite "Terminal" → Enter

**Linux**:
- `Ctrl + Alt + T`

### 1.2 - Criar Pasta Local

```bash
# Navegar para Desktop (ou a pasta que preferir)
cd Desktop

# Criar pasta
mkdir issues-tracker
cd issues-tracker
```

Confirmação: você deve ver:
```
C:\Users\seu-usuario\Desktop\issues-tracker>
```

### 1.3 - Inicializar Git

```bash
git init
```

Deve aparecer:
```
Initialized empty Git repository in ...
```

---

## Passo 1.5: Configurar Git (primeira vez apenas)

```bash
git config --global user.name "Seu Nome Completo"
git config --global user.email "seu-email@github.com"
```

**Exemplo**:
```bash
git config --global user.name "Marlus Mello"
git config --global user.email "marlus@positivo.com.br"
```

---

## Passo 2: Copiar Arquivos Criados

### Estrutura esperada:

```
issues-tracker/
├─ T3010DW_Issues_Tracker.xlsx
├─ excel_to_json.py
├─ data.json
├─ README.md
├─ QUICK_START.md
├─ ARQUIVOS_CRIADOS.md
├─ package.json
├─ vite.config.js
├─ index.html
├─ .gitignore
├─ .nojekyll
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ App.css
   ├─ index.css
   └─ components/
      ├─ Dashboard.jsx
      ├─ Dashboard.css
      ├─ IssuesTable.jsx
      └─ IssuesTable.css
```

### Opção A - Copiar Manualmente (mais fácil)

1. Abra Explorador de Arquivos
2. Acesse `/mnt/user-data/outputs/` 
3. **Selecione TODOS os arquivos e pastas**
4. `Ctrl + C` (copiar)
5. Navegue até `C:\Users\seu-usuario\Desktop\issues-tracker\`
6. `Ctrl + V` (colar)

### Opção B - Terminal

**Windows**:
```bash
# Substitua o caminho para onde estão os arquivos
xcopy "C:\Users\seu-usuario\Downloads\*.*" . /Y /E
```

**Mac/Linux**:
```bash
cp -r ~/Downloads/* ~/Desktop/issues-tracker/
```

---

## Passo 3: Primeiro Push para GitHub

### 3.1 - Verificar Arquivos

No terminal (dentro de `issues-tracker/`):

```bash
git status
```

Deve mostrar todos os arquivos como "Untracked files".

### 3.2 - Adicionar Todos

```bash
git add .
```

Verifique:
```bash
git status
```

Agora deve mostrar em verde (Changes to be committed).

### 3.3 - Commit

```bash
git commit -m "Initial commit: Issues Tracker setup"
```

### 3.4 - Conectar ao GitHub

```bash
git branch -M main
git remote add origin https://github.com/seu-usuario/issues-tracker.git
```

**Substitua `seu-usuario`** pelo seu GitHub username.

### 3.5 - Push

```bash
git push -u origin main
```

**Se pedir credenciais**:
- Username: seu GitHub username
- Password: seu GitHub token (não é senha)

Se não tem token, crie em https://github.com/settings/tokens → Generate new token (classic)

✅ **Repositório criado!**

---

## Passo 4: Instalar Dependências Node.js

```bash
npm install
```

Deve instalar React, Vite, Recharts.

---

## Passo 5: Testar Localmente (Opcional)

```bash
npm run dev
```

Acesse: `http://localhost:5173`

Aperte `Ctrl + C` para parar.

---

## Passo 6: Build para Produção

```bash
npm run build
```

Isso gera pasta `dist/` com arquivos prontos.

---

## Passo 7: Ativar GitHub Pages

### 7.1 - No GitHub

1. Acesse https://github.com/seu-usuario/issues-tracker
2. Vá em **Settings** (engrenagem) → **Pages**
3. Em **Build and deployment**:
   - **Source**: "Deploy from a branch"
   - **Branch**: "main", pasta "root"
4. Clique: **Save**

### 7.2 - Aguarde Deployment

GitHub vai compilar automaticamente. Espere 1-2 minutos.

Você verá:
```
✓ Your site is published at https://seu-usuario.github.io/issues-tracker/
```

---

## Passo 8: Acessar Dashboard

Abra em seu navegador:

```
https://seu-usuario.github.io/issues-tracker/
```

✅ **Dashboard online!**

---

## Passo 9: Workflow Diário

### Quando editar a planilha Excel:

```bash
# 1. Edita no Excel
# 2. Exporta JSON
python excel_to_json.py T3010DW_Issues_Tracker.xlsx

# 3. Commit e push
git add data.json
git commit -m "Update issues: $(date)"
git push

# 4. Aguarda 1-2 min e acessa
# https://seu-usuario.github.io/issues-tracker/
```

---

## 🔍 Verificação

### Para confirmar que tudo funciona:

```bash
# 1. Testar localmente
npm run dev
# Abre http://localhost:5173

# 2. Build
npm run build

# 3. Verificar se data.json foi gerado
ls -la data.json

# 4. Fazer um push teste
git add .
git commit -m "Test"
git push

# 5. Acessar: https://seu-usuario.github.io/issues-tracker/
```

---

## 🐛 Troubleshooting

### Dashboard não carrega ou está em branco

**Causa**: Arquivo `data.json` não foi exportado

**Solução**:
```bash
python excel_to_json.py T3010DW_Issues_Tracker.xlsx
git add data.json
git commit -m "Add data.json"
git push
```

### GitHub Pages mostra 404

**Causa**: Configuração errada do branch ou base path

**Solução**:
1. Verifique em **Settings → Pages** se está usando `main` branch
2. Se repo é subfolder do PM Hub, edite `vite.config.js`:
```javascript
base: '/pm-hub/issues-tracker/',  // Ajuste conforme sua estrutura
```

### Gráficos não aparecem

**Causa**: Recharts não foi instalado

**Solução**:
```bash
npm install recharts
npm run build
git push
```

### Estilos estranhos no mobile

**Teste**:
1. Abra no celular/tablet
2. Aperte F12 → Responsive Design Mode
3. Se tiver problemas, avise no chat

---

## 📞 Próximas Atualizações

Quando quiser atualizar o dashboard:

```bash
# Edita os issues no Excel
python excel_to_json.py T3010DW_Issues_Tracker.xlsx

# Se quiser editar código React:
npm run dev
# ... edita arquivos em src/
# Commit quando pronto

# Sempre termina com:
npm run build
git add .
git commit -m "Update: [descrição]"
git push
```

---

**Pronto! Dashboard está online.** 🎉

Acesse: `https://seu-usuario.github.io/issues-tracker/`
