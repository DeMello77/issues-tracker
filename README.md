# T3010DW Issues Tracker Dashboard

Dashboard visual para rastreamento de issues do T3010DW com React + Vite.

## 📋 Estrutura

```
├─ T3010DW_Issues_Tracker.xlsx    # Planilha Excel (fonte de dados)
├─ excel_to_json.py                # Script para exportar Excel → JSON
├─ issues-tracker/                 # Projeto React/Vite
│  ├─ src/
│  │  ├─ main.jsx
│  │  ├─ App.jsx
│  │  ├─ App.css
│  │  ├─ index.css
│  │  └─ components/
│  │     ├─ Dashboard.jsx
│  │     ├─ Dashboard.css
│  │     ├─ IssuesTable.jsx
│  │     └─ IssuesTable.css
│  ├─ package.json
│  ├─ vite.config.js
│  └─ index.html
├─ data.json                       # Dados dos issues (gerado automaticamente)
└─ README.md
```

## 🚀 Como Usar

### 1. Editar Issues no Excel

Abra `T3010DW_Issues_Tracker.xlsx`:
- **Aba DASHBOARD**: Visualizar KPIs e gráficos (auto-atualiza)
- **Aba ISSUES**: Editar issues, comentários, status
- **Aba LEGENDA**: Referência de valores

### 2. Exportar Excel → JSON

Quando terminar de editar, rode:

```bash
python excel_to_json.py T3010DW_Issues_Tracker.xlsx
```

Isso gera `data.json` com todos os issues.

### 3. Deploy no GitHub

```bash
# 1. Copie os arquivos para seu repositório
git add .
git commit -m "Update issues: $(date)"
git push

# 2. GitHub Pages atualiza automaticamente
# Acesse: https://seu-usuario.github.io/issues-tracker
```

### 4. Local (Desenvolvimento)

```bash
cd issues-tracker
npm install
npm run dev
```

Acesse `http://localhost:5173`

## 📊 O que o Dashboard Mostra

### Aba Dashboard
- **KPIs**: Total, Pendentes, Resolvidos, Taxa de Resolução (%)
- **Gráficos**:
  - Status (Pizza): Distribuição por status
  - Prioridade (Barras): High/Urgent/Normal/Low
  - HW vs SW (Pizza): Hardware vs Software
  - Responsáveis (Barras): Top 8 pessoas
  - Tendência (Linha): Resolvidos nos últimos 14 dias

### Aba Issues
- **Tabela filtrável** com 25 issues
- **Filtros**: Status, Prioridade, Tipo, Categoria, Responsável
- **Busca rápida**: Por ID, sumário, responsável
- **Indicadores**: M=Marlus, O=ODM, Z=Ztech (comentários)

## 🎯 Status Disponíveis

- **ABERTO**: Novo, sem ação
- **EM ANÁLISE**: Investigando
- **EM DESENVOLVIMENTO**: Corrigindo
- **AGUARDANDO VALIDAÇÃO**: Pronto para testar
- **RESOLVIDO**: Versão lançada com fix
- **REJEITADO**: Não será corrigido
- **CANCELADO**: Duplicado/não aplicável

## 👥 Responsáveis

- Marlus / marlusmello (QA/Focal)
- VictorMiguel, GuilhermeLima, inaciobrazil (Testes)
- ODM (Fornecedor)
- Ztech (Ztech)

## 🔄 Workflow Recomendado

```
1. Edita Excel (adiciona/atualiza issues)
   ↓
2. Roda: python excel_to_json.py
   ↓
3. Git commit + push
   ↓
4. Dashboard atualiza automaticamente em GitHub Pages
   ↓
5. Equipe acessa e visualiza online
```

## 📱 Responsividade

Dashboard funciona em:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (< 768px) - tabela com scroll horizontal

## 🛠 Customizações

### Mudar cores
Edite em `src/components/Dashboard.jsx`:
```javascript
const COLORS = ['#FFEB3B', '#FFA500', ...] // Cores dos gráficos
```

### Mudar base path
Se não estiver em `/issues-tracker/`, edite `vite.config.js`:
```javascript
base: '/seu-path-aqui/',
```

## 📞 Suporte

Para dúvidas ou bugs, contate Marlus.

---

**Última atualização**: 2026-06-01
