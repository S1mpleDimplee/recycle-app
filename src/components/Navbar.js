import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../Icons/Icons'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function close() { setOpen(false) }

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo" onClick={close}>
        <img src={logo} alt="Tradr" />
      </Link>

      <ul className={`nav-links${open ? ' nav-links-open' : ''}`}>
        <li><Link to="/" onClick={close}>Thuis</Link></li>
        <li><Link to="/over-tradr" onClick={close}>Over Tradr</Link></li>
        <li><Link to="/aan-de-slag" onClick={close}>Aan de slag</Link></li>
        <li className="nav-mobile-actions">
          <Link to="/register" className="nav-btn-outline" onClick={close}>Registreren</Link>
          <Link to="/login"    className="nav-btn-primary"  onClick={close}>Inloggen</Link>
        </li>
      </ul>

      <div className="nav-actions">
        <Link to="/register" className="nav-btn-outline">Registreren</Link>
        <Link to="/login"    className="nav-btn-primary">Inloggen</Link>
      </div>

      <button
        className={`nav-hamburger${open ? ' nav-hamburger-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      {open && <div className="nav-overlay" onClick={close} />}
    </nav>
  )
}
