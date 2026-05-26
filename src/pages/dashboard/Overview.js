import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { recy } from '../../Icons/Icons'
import { mockUser, mockListings, mockPurchases } from './mockData'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function Overview() {
  const navigate = useNavigate()

  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <p className="db-welcome">Welkom terug, <strong>{mockUser.name}</strong> 👋</p>

        <div className="db-stats">
          <div className="db-stat-card db-stat-green">
            <div className="db-stat-icon"><img src={recy} alt="recy" className="recy-icon recy-icon-lg" /></div>
            <div>
              <div className="db-stat-value">{mockUser.recys}</div>
              <div className="db-stat-label">Recy's saldo</div>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-icon">📦</div>
            <div>
              <div className="db-stat-value">{mockListings.filter(l => l.status === 'actief').length}</div>
              <div className="db-stat-label">Actieve artikelen</div>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-icon">✅</div>
            <div>
              <div className="db-stat-value">{mockListings.filter(l => l.status === 'verkocht').length}</div>
              <div className="db-stat-label">Verkocht</div>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-icon">🛍️</div>
            <div>
              <div className="db-stat-value">{mockPurchases.length}</div>
              <div className="db-stat-label">Aankopen</div>
            </div>
          </div>
        </div>

        <h2 className="db-section-title">Recente activiteit</h2>
        <div className="db-activity-list">
          <div className="db-activity-item">
            <span className="db-activity-dot db-dot-green" />
            <div><strong>Canon Camera</strong> verkocht voor 120 Recy's</div>
            <span className="db-activity-time">2 dagen geleden</span>
          </div>
          <div className="db-activity-item">
            <span className="db-activity-dot db-dot-blue" />
            <div><strong>Sony Koptelefoon</strong> gekocht voor 60 Recy's</div>
            <span className="db-activity-time">14 dagen geleden</span>
          </div>
          <div className="db-activity-item">
            <span className="db-activity-dot db-dot-green" />
            <div><strong>Vintage Jas</strong> geplaatst voor 35 Recy's</div>
            <span className="db-activity-time">20 dagen geleden</span>
          </div>
        </div>

        <button className="db-cta-btn" onClick={() => navigate('/dashboard/add')}>
          + Nieuw artikel plaatsen
        </button>
      </div>
    </motion.div>
  )
}
