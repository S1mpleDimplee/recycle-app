import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { logogreen } from '../Icons/Icons'
import './Register.css'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
}

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.password !== form.confirm) {
      setError('Wachtwoorden komen niet overeen.')
      return
    }
    if (form.password.length < 6) {
      setError('Wachtwoord moet minimaal 6 tekens zijn.')
      return
    }
    setLoading(true)
    setError('')

    setTimeout(() => {
      setLoading(false)
      navigate('/login')
    }, 800)
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />
      <div className="auth-page">
        <div className="reg-card">
          <Link to="/" className="auth-logo">
            <img src={logogreen} alt="Tradr" />
          </Link>
          <h2>Registreren</h2>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="auth-group">
              <label htmlFor="name">Volledige naam</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Voer je naam in"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="auth-group">
              <label htmlFor="email">E-mailadres</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Voer je e-mailadres in"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="auth-group">
              <label htmlFor="phone">Telefoonnummer</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Voer je telefoonnummer in"
                value={form.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <div className="auth-row">
              <div className="auth-group">
                <label htmlFor="password">Wachtwoord</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Min. 6 tekens"
                  value={form.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />
              </div>

              <div className="auth-group">
                <label htmlFor="confirm">Herhaal wachtwoord</label>
                <input
                  id="confirm"
                  name="confirm"
                  type="password"
                  placeholder="Herhaal wachtwoord"
                  value={form.confirm}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                />
              </div>
            </div>

            <p className="auth-terms">
              Door te registreren ga je akkoord met onze{' '}
              <a href="#!" onClick={e => e.preventDefault()}>voorwaarden</a>.
              Je ontvangt <strong>50 Recy's</strong> gratis om meteen te kopen!
            </p>

            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? 'Bezig...' : 'Account aanmaken'}
            </button>
          </form>

          <p className="auth-login-link">
            Al een account? <Link to="/login">Inloggen</Link>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
