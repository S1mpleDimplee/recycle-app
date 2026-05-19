import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import './HowItWorks.css'

const pageVariants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } },
}

const steps = [
  {
    number: '01',
    title: 'Maak een account aan',
    desc: 'Registreer gratis en ontvang direct 50 Recy\'s als welkomstbonus.',
  },
  {
    number: '02',
    title: 'Zet spullen te koop',
    desc: 'Foto, omschrijving, prijs in Recy\'s — en je artikel staat live.',
  },
  {
    number: '03',
    title: 'Verdien Recy\'s',
    desc: 'Zodra iemand jouw artikel koopt, krijg jij de Recy\'s op je account.',
  },
  {
    number: '04',
    title: 'Koop van anderen',
    desc: 'Gebruik je Recy\'s om artikelen van andere gebruikers te kopen. Geen echt geld nodig.',
  },
]

const faqs = [
  { q: 'Wat zijn Recy\'s?', a: 'Recy\'s zijn de virtuele munt van Tradr. Je verdient ze door spullen te verkopen en geeft ze uit om spullen van anderen te kopen.' },
  { q: 'Kan ik ook gewoon kopen zonder te verkopen?', a: 'Je start met 50 Recy\'s welkomstbonus. Daarna heb je Recy\'s nodig, dus verkoop eerst iets!' },
  { q: 'Is Tradr gratis?', a: 'Ja, een account aanmaken en artikelen plaatsen is volledig gratis. Tradr vraagt geen commissie in euro\'s.' },
]

export default function HowItWorks() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Navbar />

      <section className="hiw-hero">
        <h1>Aan de <span className="hiw-accent">slag</span></h1>
        <p>In vier stappen spullen verkopen en kopen met Recy's. Zo simpel is het.</p>
      </section>

      <section className="hiw-steps">
        <div className="hiw-steps-grid">
          {steps.map(s => (
            <div key={s.number} className="hiw-step">
              <div className="hiw-step-number">{s.number}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hiw-faq">
        <h2>Veelgestelde vragen</h2>
        <div className="hiw-faq-list">
          {faqs.map(f => (
            <div key={f.q} className="hiw-faq-item">
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="hiw-cta">
        <h2>Klaar om te starten?</h2>
        <p>Sluit je aan bij honderden gebruikers die al recyclen met Tradr.</p>
        <Link to="/register" className="hiw-btn">Begin nu</Link>
      </section>
    </motion.div>
  )
}
