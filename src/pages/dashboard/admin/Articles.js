import { motion } from 'framer-motion'
import { recy } from '../../../Icons/Icons'
import { mockAllArticles } from '../mockData'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function Articles() {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <p className="db-section-sub">{mockAllArticles.length} artikelen op het platform</p>

        <div className="db-listings-grid">
          {mockAllArticles.map(a => (
            <div key={a.id} className="db-listing-card">
              <div className="db-listing-img">{a.emoji}</div>
              <div className="db-listing-body">
                <div className="db-listing-top">
                  <h3>{a.title}</h3>
                  <span className={`db-badge ${a.status === 'actief' ? 'db-badge-green' : 'db-badge-gray'}`}>
                    {a.status}
                  </span>
                </div>
                <p className="db-listing-cat">{a.category} · door <strong>{a.user}</strong></p>
                <p className="db-listing-price">
                  <img src={recy} alt="" className="recy-icon" /> {a.price} Recy's
                </p>
              </div>
              <div className="db-listing-actions">
                <button className="db-action-btn">Bekijken</button>
                <button className="db-action-btn db-action-danger">Verwijderen</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
