import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import styles from './Home.module.css'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
}

const features = [
  { icon: '📊', title: 'Overzicht', desc: 'Bekijk in één oogopslag de recyclingvoortgang per locatie of gebruiker.' },
  { icon: '♻️', title: 'Beheer', desc: 'Voeg materialen, inzamelpunten en gegevens eenvoudig toe en bewerk ze.' },
  { icon: '📋', title: 'Registratie', desc: 'Leg hoeveelheden en soorten afval nauwkeurig vast in het systeem.' },
  { icon: '🔒', title: 'Veilig', desc: 'Rolgebaseerde toegang zodat iedereen alleen ziet wat voor hem relevant is.' },
]

export default function Home() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />

      <section className={styles.hero}>
        <h1>
          Slimmer recyclen,<br />
          <span className={styles.accent}>samen voor een betere wereld</span>
        </h1>
        <p>
          Recycle is het platform dat inzameling, verwerking en voortgang van
          recycling inzichtelijk maakt voor iedereen. Eenvoudig, overzichtelijk en duurzaam.
        </p>
        <div className={styles.actions}>
          <Link to="/register" className={styles.btnPrimary}>Gratis registreren</Link>
          <a href="#features" className={styles.btnOutline}>Meer informatie</a>
        </div>
      </section>

      <section className={styles.features} id="features">
        <h2>Wat biedt Recycle?</h2>
        <p className={styles.subtitle}>Alles op één plek voor een overzichtelijk recyclingsysteem.</p>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2026 Recycle. Alle rechten voorbehouden.</p>
      </footer>
    </motion.div>
  )
}
