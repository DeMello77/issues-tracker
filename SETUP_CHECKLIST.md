# ✅ Setup Checklist - T3010DW Issues Tracker

**Imprima ou mantenha aberto enquanto faz o setup.**

---

## FASE 1: GitHub

- [ ] Abra https://github.com e faça login
- [ ] Clique **+** → **New repository**
- [ ] **Repository name**: `issues-tracker`
- [ ] **Description**: `T3010DW Issues Tracker Dashboard`
- [ ] **Visibility**: Public ✓
- [ ] **Add .gitignore**: Node ✓
- [ ] **NÃO marque**: "Initialize with README"
- [ ] Clique: **Create repository**
- [ ] Copie o comando `git remote add origin ...`

---

## FASE 2: Pasta Local

### Terminal

- [ ] Abra Terminal / PowerShell / CMD
- [ ] `cd Desktop`
- [ ] `mkdir issues-tracker`
- [ ] `cd issues-tracker`
- [ ] `git init`
- [ ] `git config --global user.name "Seu Nome"`
- [ ] `git config --global user.email "seu-email@github.com"`

---

## FASE 3: Arquivos

### Copiar Arquivos (Explorador de Arquivos)

- [ ] Abra Explorador
- [ ] Vá em `/mnt/user-data/outputs/`
- [ ] Selecione TUDO (`Ctrl + A`)
- [ ] Copie (`Ctrl + C`)
- [ ] Abra `C:\Users\seu-usuario\Desktop\issues-tracker\`
- [ ] Cole (`Ctrl + V`)

### Criar Arquivos Extras (Terminal)

**Windows**:
```bash
echo node_modules/ > .gitignore
echo dist/ >> .gitignore
echo .env >> .gitignore
type nul > .nojekyll
```

**Mac/Linux**:
```bash
cat > .gitignore << EOF
node_modules/
dist/
.env
EOF

touch .nojekyll
```

- [ ] Arquivos criados

---

## FASE 4: Git Push

### Terminal (dentro de `issues-tracker/`)

```bash
git add .
git commit -m "Initial commit: Issues Tracker setup"
git branch -M main
git remote add origin https://github.com/seu-usuario/issues-tracker.git
git push -u origin main
```

**Quando pedir credenciais**:
- Username: seu GitHub username
- Password: seu GitHub token (criar em https://github.com/settings/tokens)

- [ ] Push realizado
- [ ] Acesse GitHub e confirme os arquivos foram enviados

---

## FASE 5: Node.js Setup

### Terminal

```bash
npm install
```

- [ ] npm install completado (sem erros)

---

## FASE 6: Testar (Opcional)

### Terminal

```bash
npm run dev
```

- [ ] Abra http://localhost:5173
- [ ] Veja o dashboard carregando
- [ ] Aperte `Ctrl + C` para parar

---

## FASE 7: Build

### Terminal

```bash
npm run build
```

- [ ] Pasta `dist/` foi criada
- [ ] Sem erros no build

---

## FASE 8: GitHub Pages

### Website GitHub

1. Abra https://github.com/seu-usuario/issues-tracker
2. **Settings** (engrenagem)
3. **Pages** (menu esquerdo)
4. **Build and deployment**:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "root"
5. **Save**
6. Aguarde 1-2 minutos

- [ ] GitHub Pages ativado
- [ ] URL: https://seu-usuario.github.io/issues-tracker/

---

## ✅ FINAL: Teste Online

- [ ] Abra https://seu-usuario.github.io/issues-tracker/ no navegador
- [ ] Veja o Dashboard carregando
- [ ] Clique na aba "Issues"
- [ ] Teste um filtro (Status, Prioridade, etc)

---

## 🎉 SUCESSO!

Dashboard está online e funcional!

**Próximas vezes que atualizar**:

```bash
# Edita Excel → exporta JSON
python excel_to_json.py T3010DW_Issues_Tracker.xlsx

# Commit
git add data.json
git commit -m "Update issues"
git push

# Dashboard atualiza automaticamente em 1-2 min
```

---

## 📞 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| "Git not found" | Instale Git: https://git-scm.com |
| "npm not found" | Instale Node.js: https://nodejs.org |
| GitHub Pages 404 | Verifique Settings → Pages está em "main/root" |
| Dashboard em branco | Rode `python excel_to_json.py` e faça push |
| Gráficos não aparecem | Rode `npm install recharts && npm run build` |

---

**Sucesso! 🚀**
