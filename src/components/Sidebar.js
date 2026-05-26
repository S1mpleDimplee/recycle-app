import { Link } from 'react-router-dom'
import { logogreen, recy } from '../Icons/Icons'
import './Sidebar.css'

export default function Sidebar({
  navItems = [],
  activeTab,
  onTabChange,
  user,
  open,
  onClose,
  homeLink = '/',
}) {
  function handleNav(id) {
    onTabChange(id)
    onClose()
  }

  return (
    <>
      <aside className={`sidebar${open ? ' sidebar-open' : ''}`}>

        <Link to={homeLink} className="sidebar-logo">
          <img src={logogreen} alt="Tradr" />
        </Link>

        <nav className="sidebar-nav">
          {navItems.map(n => (
            <button
              key={n.id}
              className={`sidebar-nav-item${activeTab === n.id ? ' sidebar-nav-active' : ''}`}
              onClick={() => handleNav(n.id)}
            >
              <span className="sidebar-nav-icon">{n.icon}</span>
              {n.label}
            </button>
          ))}
        </nav>

       
        {user && (
          <div className="sidebar-user">
            <div className="sidebar-avatar">{user.name[0]}</div>
            <div className="sidebar-user-info">
              <span className="sidebar-user-name">{user.name}</span>
              <span className="sidebar-user-role">{user.role === 1 ? 'Admin' : 'Gebruiker'}</span>
            </div>
          </div>
        )}

      </aside>

      {open && <div className="sidebar-overlay" onClick={onClose} />}
    </>
  )
}
