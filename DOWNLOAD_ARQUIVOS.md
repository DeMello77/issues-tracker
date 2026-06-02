# 📥 Download de Arquivos - T3010DW Issues Tracker

## ⚠️ IMPORTANTE

Os arquivos que você precisa copiar estão em `/mnt/user-data/outputs/`

---

## **Método 1: Copiar Manualmente (Recomendado)**

### Abra Explorador de Arquivos e navegue até:

```
\\servidor\mnt\user-data\outputs\
```

OU (se for local):

```
C:\path\para\outputs\
```

### Copie ESTES arquivos para `C:\Users\59384\Documents\issues-tracker\`:

**Arquivos principais:**
- [ ] `excel_to_json.py`
- [ ] `data.json`
- [ ] `package.json`
- [ ] `vite.config.js`
- [ ] `index.html`
- [ ] `README.md`
- [ ] `ARQUIVOS_CRIADOS.md`

**Pasta:**
- [ ] `src/` (com todos os arquivos dentro)
- [ ] `issues-tracker/` (se existir)

---

## **Método 2: Copiar via PowerShell**

Abra PowerShell em `C:\Users\59384\Documents\issues-tracker\` e rode:

```powershell
# Ajuste o caminho SOURCE para onde estão os arquivos
$SOURCE = "C:\path\para\outputs"
$DEST = "C:\Users\59384\Documents\issues-tracker"

Copy-Item -Path "$SOURCE\excel_to_json.py" -Destination $DEST -Force
Copy-Item -Path "$SOURCE\data.json" -Destination $DEST -Force
Copy-Item -Path "$SOURCE\package.json" -Destination $DEST -Force
Copy-Item -Path "$SOURCE\vite.config.js" -Destination $DEST -Force
Copy-Item -Path "$SOURCE\index.html" -Destination $DEST -Force
Copy-Item -Path "$SOURCE\README.md" -Destination $DEST -Force
Copy-Item -Path "$SOURCE\ARQUIVOS_CRIADOS.md" -Destination $DEST -Force
Copy-Item -Path "$SOURCE\src" -Destination "$DEST\src" -Recurse -Force
Copy-Item -Path "$SOURCE\issues-tracker" -Destination "$DEST\issues-tracker" -Recurse -Force

echo "Cópia concluída!"
```

---

## **Lista Completa de Arquivos**

Sua pasta `issues-tracker` deve ter:

```
C:\Users\59384\Documents\issues-tracker\
├─ .gitignore                          (já tem)
├─ .nojekyll                          (já tem)
├─ T3010DW_Issues_Tracker.xlsx        (já tem)
├─ QUICK_START.md                     (já tem)
├─ SETUP_CHECKLIST.md                 (já tem)
│
├─ excel_to_json.py                   ← COPIE ESTES
├─ data.json                          ← COPIE ESTES
├─ package.json                       ← COPIE ESTES
├─ vite.config.js                     ← COPIE ESTES
├─ index.html                         ← COPIE ESTES
├─ README.md                          ← COPIE ESTES
├─ ARQUIVOS_CRIADOS.md                ← COPIE ESTES
│
└─ src/                               ← COPIE (pasta inteira)
   ├─ main.jsx
   ├─ App.jsx
   ├─ App.css
   ├─ index.css
   └─ components/
      ├─ Dashboard.jsx
      ├─ Dashboard.css
      ├─ IssuesTable.jsx
      └─ IssuesTable.css

(issues-tracker/ é opcional)
```

---

## **Verificação**

Após copiar, no PowerShell dentro da pasta `issues-tracker`, rode:

```powershell
ls
```

Deve mostrar todos os arquivos listados acima.

---

## **Próximo Passo**

Quando terminar de copiar, me avisa que vamos fazer:

1. `git add .`
2. `git commit -m "..."`
3. `git push`

---

**Qual é o caminho exato para os arquivos em seu computador/servidor?**
