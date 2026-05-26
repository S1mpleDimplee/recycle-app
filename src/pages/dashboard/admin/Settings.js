import { motion } from 'framer-motion'
import { recy } from '../../../Icons/Icons'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function Settings() {
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <p className="db-section-sub">Platforminstellingen beheren</p>

        <div className="db-form">
          <h2 className="db-section-title" style={{ margin: 0 }}>Welkomstbonus</h2>
          <div className="db-form-group db-form-group-sm">
            <label>Recy's voor nieuwe gebruikers</label>
            <input type="number" defaultValue={50} min="0" />
            <span className="db-recys-hint">
              <img src={recy} alt="" className="recy-icon" /> Huidige bonus: 50 Recy's
            </span>
          </div>

          <h2 className="db-section-title" style={{ margin: '0.5rem 0 0' }}>Platformnaam</h2>
          <div className="db-form-group">
            <label>Naam</label>
            <input defaultValue="Tradr" />
          </div>

          <h2 className="db-section-title" style={{ margin: '0.5rem 0 0' }}>Onderhoudsmodus</h2>
          <div className="db-form-group">
            <label>Status</label>
            <select defaultValue="off">
              <option value="off">Uit — platform is actief</option>
              <option value="on">Aan — platform is in onderhoud</option>
            </select>
          </div>

          <button className="db-submit">Opslaan</button>
        </div>
      </div>
    </motion.div>
  )
}
