import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import IssuesTable from './components/IssuesTable'
import './App.css'

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    fetch('/issues-tracker/data.json')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Erro ao carregar dados: ' + err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className="loading">Carregando dados...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="app">
      <header className="header">
        <h1>📊 T3010DW Issues Tracker</h1>
        <p className="updated">Última atualização: {data.updated}</p>
      </header>

      <nav className="tabs">
        <button 
          className={`tab ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`tab ${activeTab === 'issues' ? 'active' : ''}`}
          onClick={() => setActiveTab('issues')}
        >
          Issues ({data.total})
        </button>
      </nav>

      <main className="container">
        {activeTab === 'dashboard' && <Dashboard data={data} />}
        {activeTab === 'issues' && <IssuesTable issues={data.issues} />}
      </main>

      <footer className="footer">
        <p>Positivo Tecnologia - QA/Focal Issues Tracking</p>
      </footer>
    </div>
  )
}

export default App
