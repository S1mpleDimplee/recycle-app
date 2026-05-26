import { motion } from 'framer-motion'
import { recy } from '../../../Icons/Icons'
import { mockAllUsers } from '../mockData'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function Users() {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <p className="db-section-sub">{mockAllUsers.length} geregistreerde gebruikers</p>

        <div className="db-listings-grid">
          {mockAllUsers.map(u => (
            <div key={u.id} className="db-listing-card">
              <div className="db-listing-img" style={{ fontSize: '1.4rem', background: 'var(--green)', color: '#fff', fontWeight: 700 }}>
                {u.name[0]}
              </div>
              <div className="db-listing-body">
                <div className="db-listing-top">
                  <h3>{u.name}</h3>
                  <span className="db-badge db-badge-green">actief</span>
                </div>
                <p className="db-listing-cat">{u.email}</p>
                <p className="db-listing-price">
                  <img src={recy} alt="" className="recy-icon" /> {u.recys} · {u.articles} artikelen · lid sinds {u.joined}
                </p>
              </div>
              <div className="db-listing-actions">
                <button className="db-action-btn">Bekijken</button>
                <button className="db-action-btn db-action-danger">Blokkeren</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
