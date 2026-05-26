import { motion } from 'framer-motion'
import { recy } from '../../Icons/Icons'
import { mockPurchases } from './mockData'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function Purchases() {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <p className="db-section-sub">{mockPurchases.length} aankopen gedaan</p>

        <div className="db-purchase-list">
          {mockPurchases.map(p => (
            <div key={p.id} className="db-purchase-item">
              <div className="db-purchase-emoji">{p.emoji}</div>
              <div className="db-purchase-info">
                <h3>{p.title}</h3>
                <p>Gekocht van <strong>{p.from}</strong> · {p.date}</p>
              </div>
              <div className="db-purchase-price">
                <img src={recy} alt="" className="recy-icon" /> {p.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
