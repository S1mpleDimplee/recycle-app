import { motion } from 'framer-motion'
import { mockReports } from '../mockData'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function Reports() {
  const open = mockReports.filter(r => r.status === 'open')
  const resolved = mockReports.filter(r => r.status === 'opgelost')

  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <div className="db-stats" style={{ gridTemplateColumns: '1fr 1fr', maxWidth: 400 }}>
          <div className="db-stat-card db-stat-green">
            <div className="db-stat-icon">🚨</div>
            <div>
              <div className="db-stat-value">{open.length}</div>
              <div className="db-stat-label">Open</div>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-icon">✅</div>
            <div>
              <div className="db-stat-value">{resolved.length}</div>
              <div className="db-stat-label">Opgelost</div>
            </div>
          </div>
        </div>

        <h2 className="db-section-title">Alle meldingen</h2>
        <div className="db-listings-grid">
          {mockReports.map(r => (
            <div key={r.id} className="db-listing-card">
              <div className="db-listing-img" style={{ fontSize: '1.6rem', background: r.status === 'open' ? '#ffebee' : 'var(--green-bg)' }}>
                {r.status === 'open' ? '🚨' : '✅'}
              </div>
              <div className="db-listing-body">
                <div className="db-listing-top">
                  <h3>{r.article}</h3>
                  <span className={`db-badge ${r.status === 'open' ? 'db-badge-gray' : 'db-badge-green'}`}>
                    {r.status}
                  </span>
                </div>
                <p className="db-listing-cat">Gemeld door <strong>{r.reporter}</strong> · {r.date}</p>
                <p className="db-listing-price" style={{ color: 'var(--gray)' }}>{r.reason}</p>
              </div>
              {r.status === 'open' && (
                <div className="db-listing-actions">
                  <button className="db-action-btn">Oplossen</button>
                  <button className="db-action-btn db-action-danger">Verwijderen</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
