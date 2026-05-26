import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { recy } from '../../../Icons/Icons'
import { mockListings } from '../mockData'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function Listings() {
  const navigate = useNavigate()

  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <div className="db-section-header">
          <p className="db-section-sub">{mockListings.length} artikelen in totaal</p>
          <button className="db-cta-btn db-cta-sm" onClick={() => navigate('/dashboard/add')}>
            + Nieuw plaatsen
          </button>
        </div>

        <div className="db-listings-grid">
          {mockListings.map(l => (
            <div key={l.id} className="db-listing-card">
              <div className="db-listing-img">{l.emoji}</div>
              <div className="db-listing-body">
                <div className="db-listing-top">
                  <h3>{l.title}</h3>
                  <span className={`db-badge ${l.status === 'actief' ? 'db-badge-green' : 'db-badge-gray'}`}>
                    {l.status}
                  </span>
                </div>
                <p className="db-listing-cat">{l.category}</p>
                <p className="db-listing-price">
                  <img src={recy} alt="" className="recy-icon" /> {l.price} Recy's
                </p>
              </div>
              <div className="db-listing-actions">
                <button className="db-action-btn">Bewerken</button>
                <button className="db-action-btn db-action-danger">Verwijderen</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
