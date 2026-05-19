import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import { bghome, logo } from '../Icons/Icons'
import './Home.css'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
}

const features = [
  { icon: '📦', title: 'Zet aan',      desc: 'Zet spullen die je niet meer gebruikt te koop en verdien er direct Recy\'s mee.' },
  { icon: '🔍', title: 'Ontdek',       desc: 'Blader door aanbiedingen van andere gebruikers en koop met je Recy\'s.' },
  { icon: '🪙', title: 'Recy\'s',      desc: 'Onze virtuele munt. Verdien ze door te verkopen, geef ze uit om te kopen.' },
  { icon: '♻️', title: 'Tweede leven', desc: 'Geef spullen een nieuw thuis in plaats van ze weg te gooien.' },
]

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />

      <section className="home-hero">
        <div className="home-hero-content">
          <h1>
            Verhandel spullen,
            <span className="home-accent">verdien Recy's</span>
          </h1>
          <p>
            Tradr is de Nederlandse marktplaats zonder echt geld. Verkoop wat je niet meer
            gebruikt, verdien Recy's en koop iets moois van iemand anders.
          </p>
          <div className="home-actions">
            <Link to="/register" className="home-btn-primary">Gratis registreren</Link>
            <a href="#features" className="home-btn-outline">Meer informatie</a>
          </div>
        </div>
        <div className="home-hero-image">
          <img src={bghome} alt="Recycle illustratie" />
        </div>
      </section>

      <section className="home-features" id="features">
        <h2>Wat biedt Tradr?</h2>
        <p className="home-subtitle">Kopen en verkopen zonder echt geld — zo werkt het bij ons.</p>
        <div className="home-grid">
          {features.map((f) => (
            <div key={f.title} className="home-card">
              <div className="home-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-footer-inner">
          <div className="home-footer-brand">
            <div className="home-footer-logo">
              <img src={logo} alt="logo" style={{ width: 26, height: 26 }} />
              Tradr
            </div>
            <p>
              De marktplaats waar je ongebruikte spullen verkoopt voor Recy's
              en andermans spullen koopt. Duurzaam en gratis.
            </p>
          </div>

          <div className="home-footer-col">
            <h4>Navigatie</h4>
            <ul>
              <li><Link to="/">Thuis</Link></li>
              <li><a href="#features">Over ons</a></li>
              <li><a href="#features">Hoe werkt het?</a></li>
              <li><Link to="/register">Registreren</Link></li>
            </ul>
          </div>

          <div className="home-footer-col">
            <h4>Contact</h4>
            <p>
              info@tradr.nl<br />
              +31 20 123 4567<br />
              Amsterdam, Nederland
            </p>
          </div>
        </div>
        <div className="home-footer-bottom">
          <p>&copy; 2026 Tradr. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </motion.div>
  )
}
