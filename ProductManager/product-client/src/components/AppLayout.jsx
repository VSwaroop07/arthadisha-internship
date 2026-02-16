import { Link, Outlet, useNavigate } from 'react-router-dom'
import { clearToken } from '../services/api.js'
import '../styles/layout.css'

function AppLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    clearToken()
    navigate('/login', { replace: true })
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark">PX</span>
          <div>
            <p className="brand-title">Product Hub</p>
            <p className="brand-subtitle">Inventory console</p>
          </div>
        </div>
        <nav className="app-nav">
          <Link to="/products">Products</Link>
          <button type="button" className="ghost-button" onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </header>
      <main className="app-content">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout
