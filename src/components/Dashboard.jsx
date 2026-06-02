import { PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import './Dashboard.css'

function Dashboard({ data }) {
  const issues = data.issues

  // Calcular estatísticas
  const stats = {
    total: issues.length,
    abertos: issues.filter(i => i.status === 'ABERTO').length,
    emAnalise: issues.filter(i => i.status === 'EM ANÁLISE').length,
    emDev: issues.filter(i => i.status === 'EM DESENVOLVIMENTO').length,
    aguardandoVal: issues.filter(i => i.status === 'AGUARDANDO VALIDAÇÃO').length,
    resolvidos: issues.filter(i => i.status === 'RESOLVIDO').length,
    rejeitados: issues.filter(i => i.status === 'REJEITADO').length,
    cancelados: issues.filter(i => i.status === 'CANCELADO').length,
  }

  stats.pendentes = stats.abertos + stats.emAnalise + stats.emDev + stats.aguardandoVal
  stats.taxaResolucao = Math.round((stats.resolvidos / stats.total) * 100)

  // Dados para gráficos
  const statusData = [
    { name: 'Abertos', value: stats.abertos, color: '#FFEB3B' },
    { name: 'Em Análise', value: stats.emAnalise, color: '#FFA500' },
    { name: 'Em Dev', value: stats.emDev, color: '#2196F3' },
    { name: 'Aguardando', value: stats.aguardandoVal, color: '#9C27B0' },
    { name: 'Resolvidos', value: stats.resolvidos, color: '#4CAF50' },
    { name: 'Rejeitados', value: stats.rejeitados, color: '#F44336' },
  ].filter(s => s.value > 0)

  const prioridades = issues.reduce((acc, i) => {
    const p = i.prioridade
    const existing = acc.find(x => x.name === p)
    if (existing) existing.value++
    else acc.push({ name: p, value: 1 })
    return acc
  }, []).sort((a, b) => b.value - a.value)

  const tipos = [
    { name: 'SW', value: issues.filter(i => i.tipo === 'SW').length },
    { name: 'HW', value: issues.filter(i => i.tipo === 'HW').length },
  ].filter(t => t.value > 0)

  const responsaveis = issues.reduce((acc, i) => {
    const r = i.responsavel || 'Não atribuído'
    const existing = acc.find(x => x.name === r)
    if (existing) existing.value++
    else acc.push({ name: r, value: 1 })
    return acc
  }, []).sort((a, b) => b.value - a.value).slice(0, 8)

  // Timeline (últimos 14 dias)
  const resolvidos_por_dia = {}
  issues.filter(i => i.status === 'RESOLVIDO' && i.dataFechamento).forEach(i => {
    const dia = i.dataFechamento
    resolvidos_por_dia[dia] = (resolvidos_por_dia[dia] || 0) + 1
  })

  const timeline = Object.entries(resolvidos_por_dia)
    .sort()
    .slice(-14)
    .map(([dia, count]) => ({ dia, resolvidos: count }))

  const COLORS = ['#FFEB3B', '#FFA500', '#2196F3', '#9C27B0', '#4CAF50', '#F44336']

  return (
    <div className="dashboard">
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">Total Issues</div>
          <div className="kpi-value">{stats.total}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Pendentes</div>
          <div className="kpi-value" style={{ color: '#FF9800' }}>{stats.pendentes}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Resolvidos</div>
          <div className="kpi-value" style={{ color: '#4CAF50' }}>{stats.resolvidos}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Taxa Resolução</div>
          <div className="kpi-value" style={{ color: '#2196F3' }}>{stats.taxaResolucao}%</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-container">
          <h3>Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Prioridade</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={prioridades}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#FF6B6B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>HW vs SW</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={tipos}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {tipos.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#1F4E78', '#FF9800'][index % 2]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Responsáveis (Top 8)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={responsaveis}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {timeline.length > 0 && (
          <div className="chart-container">
            <h3>Tendência: Resolvidos (14 dias)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={timeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="resolvidos" stroke="#4CAF50" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
