import { useState, useMemo } from 'react'
import './IssuesTable.css'

function IssuesTable({ issues }) {
  const [filters, setFilters] = useState({
    status: '',
    prioridade: '',
    tipo: '',
    responsavel: '',
    categoria: '',
  })

  const [searchTerm, setSearchTerm] = useState('')

  const statuses = [...new Set(issues.map(i => i.status))].filter(Boolean).sort()
  const prioridades = [...new Set(issues.map(i => i.prioridade))].filter(Boolean).sort()
  const tipos = [...new Set(issues.map(i => i.tipo))].filter(Boolean).sort()
  const responsaveis = [...new Set(issues.map(i => i.responsavel))].filter(Boolean).sort()
  const categorias = [...new Set(issues.map(i => i.categoria))].filter(Boolean).sort()

  const filteredIssues = useMemo(() => {
    return issues.filter(issue => {
      const matchStatus = !filters.status || issue.status === filters.status
      const matchPrioridade = !filters.prioridade || issue.prioridade === filters.prioridade
      const matchTipo = !filters.tipo || issue.tipo === filters.tipo
      const matchResponsavel = !filters.responsavel || issue.responsavel === filters.responsavel
      const matchCategoria = !filters.categoria || issue.categoria === filters.categoria
      const matchSearch = !searchTerm || 
        issue.id.toString().includes(searchTerm) ||
        issue.sumario.toLowerCase().includes(searchTerm.toLowerCase()) ||
        issue.responsavel.toLowerCase().includes(searchTerm.toLowerCase())

      return matchStatus && matchPrioridade && matchTipo && matchResponsavel && matchCategoria && matchSearch
    })
  }, [issues, filters, searchTerm])

  const getStatusColor = (status) => {
    const colors = {
      'ABERTO': '#FFEB3B',
      'EM ANÁLISE': '#FFA500',
      'EM DESENVOLVIMENTO': '#2196F3',
      'AGUARDANDO VALIDAÇÃO': '#9C27B0',
      'RESOLVIDO': '#4CAF50',
      'REJEITADO': '#F44336',
      'CANCELADO': '#666666',
    }
    return colors[status] || '#ccc'
  }

  const getPriorityColor = (priority) => {
    if (['Urgent', 'urgent', 'immediate'].includes(priority)) return '#FFCCCB'
    if (['High', 'HIGH'].includes(priority)) return '#FFE0B2'
    return 'transparent'
  }

  return (
    <div className="issues-container">
      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Buscar por ID, sumário ou responsável..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          className="filter-select"
        >
          <option value="">Todos os Status</option>
          {statuses.map(s => <option key={s} value={s}>{s}</option>)}
        </select>

        <select
          value={filters.prioridade}
          onChange={(e) => setFilters({ ...filters, prioridade: e.target.value })}
          className="filter-select"
        >
          <option value="">Todas Prioridades</option>
          {prioridades.map(p => <option key={p} value={p}>{p}</option>)}
        </select>

        <select
          value={filters.tipo}
          onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}
          className="filter-select"
        >
          <option value="">HW/SW</option>
          {tipos.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <select
          value={filters.categoria}
          onChange={(e) => setFilters({ ...filters, categoria: e.target.value })}
          className="filter-select"
        >
          <option value="">Todas Categorias</option>
          {categorias.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select
          value={filters.responsavel}
          onChange={(e) => setFilters({ ...filters, responsavel: e.target.value })}
          className="filter-select"
        >
          <option value="">Todos Responsáveis</option>
          {responsaveis.map(r => <option key={r} value={r}>{r}</option>)}
        </select>

        <button 
          onClick={() => {
            setFilters({ status: '', prioridade: '', tipo: '', responsavel: '', categoria: '' })
            setSearchTerm('')
          }}
          className="filter-reset"
        >
          Limpar
        </button>
      </div>

      <div className="results-info">
        Exibindo <strong>{filteredIssues.length}</strong> de <strong>{issues.length}</strong> issues
      </div>

      <div className="table-wrapper">
        <table className="issues-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Prioridade</th>
              <th>Tipo</th>
              <th>Categoria</th>
              <th>Sumário</th>
              <th>Status</th>
              <th>Responsável</th>
              <th>Data Aberta</th>
              <th>Versão Fix</th>
              <th>Comentários</th>
            </tr>
          </thead>
          <tbody>
            {filteredIssues.length === 0 ? (
              <tr>
                <td colSpan="10" className="empty-state">Nenhum issue encontrado com os filtros aplicados</td>
              </tr>
            ) : (
              filteredIssues.map(issue => (
                <tr key={issue.id} className="issue-row">
                  <td className="id-cell">{issue.id}</td>
                  <td style={{ backgroundColor: getPriorityColor(issue.prioridade) }}>{issue.prioridade}</td>
                  <td><span className="badge" style={{ backgroundColor: issue.tipo === 'HW' ? '#FF6B6B' : '#1F4E78', color: 'white' }}>{issue.tipo}</span></td>
                  <td>{issue.categoria}</td>
                  <td className="sumario-cell" title={issue.sumario}>{issue.sumario}</td>
                  <td style={{ backgroundColor: getStatusColor(issue.status), fontWeight: 'bold' }}>{issue.status}</td>
                  <td>{issue.responsavel}</td>
                  <td className="date-cell">{issue.dataAberta}</td>
                  <td className="version-cell">{issue.versaoFix || '—'}</td>
                  <td className="comments-cell">
                    {issue.comentarioMarlus && <span title={issue.comentarioMarlus}>M</span>}
                    {issue.comentarioODM && <span title={issue.comentarioODM}>O</span>}
                    {issue.comentarioZtech && <span title={issue.comentarioZtech}>Z</span>}
                    {!issue.comentarioMarlus && !issue.comentarioODM && !issue.comentarioZtech && '—'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default IssuesTable
