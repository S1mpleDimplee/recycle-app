import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { callApi } from '../api'
import Navbar from '../components/Navbar'
import { logogreen } from '../Icons/Icons'
import './Login.css'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
}

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await callApi('loginuser', {
      email: form.email,
      password: form.password,
    })

    setLoading(false)

    if (result.success) {
      localStorage.setItem('user', JSON.stringify(result.data))
      navigate('/dashboard')
    } else {
      setError(result.message || 'Inloggen mislukt.')
    }
  }

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />
      <div className="auth-page">
        <div className="auth-card">
          <Link to="/" className="auth-logo">
            <img src={logogreen} alt="Tradr" />
          </Link>
          <p className="auth-tagline">Welkom terug!</p>

          <h2>Inloggen</h2>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit}>
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
              <label htmlFor="password">Wachtwoord</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Voer je wachtwoord in"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
            </div>

            <div className="auth-forgot">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#!" onClick={e => e.preventDefault()}>Wachtwoord vergeten?</a>
            </div>

            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? 'Bezig...' : 'Inloggen'}
            </button>
          </form>

          <p className="auth-register-link">
            Nog geen account? <Link to="/register">Registreren</Link>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
