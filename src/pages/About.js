import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
}

export default function About() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />

      <section className="about-hero">
        <h1>Over <span className="about-accent">Tradr</span></h1>
        <p>
          Tradr is geboren uit één simpele gedachte: waarom gooi je spullen weg als
          iemand anders er blij van wordt? Wij bouwen de marktplaats zonder echt geld.
        </p>
      </section>

      <section className="about-mission">
        <div className="about-mission-inner">
          <div className="about-mission-text">
            <h2>Onze missie</h2>
            <p>
              Tradr werkt als Marktplaats, maar zonder echt geld. Verkoop je oude spullen
              en verdien Recy's. Gebruik die Recy's om iets van iemand anders te kopen.
              Iedereen wint, en spullen krijgen een tweede leven.
            </p>
            <p>
              Eenvoudig, eerlijk en duurzaam dat is waar Tradr voor staat.
            </p>
          </div>
          <div className="about-mission-stats">
            <div className="about-stat">
              <span className="about-stat-number">500+</span>
              <span className="about-stat-label">Actieve gebruikers</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">2k+</span>
              <span className="about-stat-label">Artikelen geplaatst</span>
            </div>
            <div className="about-stat">
              <span className="about-stat-number">98%</span>
              <span className="about-stat-label">Tevreden kopers</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Doe mee met Tradr</h2>
        <p>Maak een gratis account aan en begin vandaag met handelen.</p>
        <Link to="/register" className="about-btn">Gratis registreren</Link>
      </section>

      <Footer />
    </motion.div>
  )
}
