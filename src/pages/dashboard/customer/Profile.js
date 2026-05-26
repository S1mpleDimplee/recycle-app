import { motion } from 'framer-motion'
import { recy } from '../../../Icons/Icons'
import { mockUser, mockListings, mockPurchases } from '../mockData'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function Profile() {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <div className="db-profile-card">
          <div className="db-profile-avatar">{mockUser.name[0]}</div>
          <h2>{mockUser.name}</h2>
          <p className="db-profile-since">Lid sinds mei 2026</p>
          <div className="db-profile-stats">
            <div>
              <strong>
                <img src={recy} alt="" className="recy-icon recy-icon-lg" /> {mockUser.recys}
              </strong>
              <span>Recy's</span>
            </div>
            <div><strong>{mockListings.length}</strong><span>Artikelen</span></div>
            <div><strong>{mockPurchases.length}</strong><span>Aankopen</span></div>
          </div>
        </div>

        <div className="db-form db-profile-form">
          <div className="db-form-row">
            <div className="db-form-group">
              <label>Naam</label>
              <input defaultValue={mockUser.name} />
            </div>
            <div className="db-form-group">
              <label>E-mailadres</label>
              <input defaultValue="jayla@tradr.nl" type="email" />
            </div>
          </div>
          <div className="db-form-group">
            <label>Nieuw wachtwoord</label>
            <input type="password" placeholder="Laat leeg om niet te wijzigen" />
          </div>
          <button className="db-submit">Opslaan</button>
        </div>
      </div>
    </motion.div>
  )
}
