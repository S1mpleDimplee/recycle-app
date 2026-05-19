import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  function close() { setOpen(false) }

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo} onClick={close}>
        ♻️ <span>Recycle</span>
      </Link>

      <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
        <li><a href="#features" onClick={close}>Over ons</a></li>
        <li><a href="#features" onClick={close}>Hoe het werkt</a></li>
        <li className={styles.mobileActions}>
          <Link to="/register" className={styles.btnOutline} onClick={close}>Registreren</Link>
          <Link to="/login"    className={styles.btnPrimary}  onClick={close}>Inloggen</Link>
        </li>
      </ul>

      <div className={styles.navActions}>
        <Link to="/register" className={styles.btnOutline}>Registreren</Link>
        <Link to="/login"    className={styles.btnPrimary}>Inloggen</Link>
      </div>

      <button
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      {open && <div className={styles.overlay} onClick={close} />}
    </nav>
  )
}
