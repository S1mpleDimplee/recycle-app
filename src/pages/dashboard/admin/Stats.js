import { motion } from 'framer-motion'
import { recy } from '../../../Icons/Icons'
import { mockAdminStats, mockAllUsers, mockReports } from '../mockData'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function Stats() {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <p className="db-welcome">Platform overzicht 📈</p>

        <div className="db-stats">
          <div className="db-stat-card db-stat-green">
            <div className="db-stat-icon">👥</div>
            <div>
              <div className="db-stat-value">{mockAdminStats.totalUsers}</div>
              <div className="db-stat-label">Gebruikers</div>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-icon">📦</div>
            <div>
              <div className="db-stat-value">{mockAdminStats.totalArticles}</div>
              <div className="db-stat-label">Artikelen</div>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-icon">🔄</div>
            <div>
              <div className="db-stat-value">{mockAdminStats.totalTrades}</div>
              <div className="db-stat-label">Trades</div>
            </div>
          </div>
          <div className="db-stat-card">
            <div className="db-stat-icon"><img src={recy} alt="" className="recy-icon recy-icon-lg" /></div>
            <div>
              <div className="db-stat-value">{mockAdminStats.totalRecys.toLocaleString()}</div>
              <div className="db-stat-label">Recy's in omloop</div>
            </div>
          </div>
        </div>

        <h2 className="db-section-title">Nieuwe gebruikers</h2>
        <div className="db-activity-list">
          {mockAllUsers.slice(0, 3).map(u => (
            <div key={u.id} className="db-activity-item">
              <span className="db-activity-dot db-dot-green" />
              <div><strong>{u.name}</strong> heeft zich geregistreerd</div>
              <span className="db-activity-time">{u.joined}</span>
            </div>
          ))}
        </div>

        <h2 className="db-section-title">Openstaande meldingen</h2>
        <div className="db-activity-list">
          {mockReports.filter(r => r.status === 'open').map(r => (
            <div key={r.id} className="db-activity-item">
              <span className="db-activity-dot db-dot-blue" />
              <div><strong>{r.article}</strong> — {r.reason}</div>
              <span className="db-activity-time">{r.date}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
