import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { recy } from '../../../Icons/Icons'
import { mockUser, categories } from '../mockData'

const variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.22, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.15, ease: 'easeIn' } },
}

export default function AddListing() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ title: '', category: '', price: '', desc: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ title: '', category: '', price: '', desc: '' })
      navigate('/dashboard/listings')
    }, 1500)
  }

  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      <div className="db-section">
        <p className="db-section-sub">Vul de gegevens in om je artikel te plaatsen.</p>

        {submitted ? (
          <div className="db-success">
            ✅ Artikel succesvol geplaatst! Je wordt doorgestuurd...
          </div>
        ) : (
          <form className="db-form" onSubmit={handleSubmit}>
            <div className="db-form-upload">
              <span>📷</span>
              <p>Klik om een foto te uploaden</p>
              <span className="db-upload-hint">JPG, PNG — max 5 MB</span>
            </div>

            <div className="db-form-row">
              <div className="db-form-group">
                <label>Titel</label>
                <input name="title" value={form.title} onChange={handleChange}
                  placeholder="Bijv. Nike Air Max 90" required />
              </div>
              <div className="db-form-group">
                <label>Categorie</label>
                <select name="category" value={form.category} onChange={handleChange} required>
                  <option value="">Kies een categorie</option>
                  {categories.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="db-form-group">
              <label>Omschrijving</label>
              <textarea name="desc" value={form.desc} onChange={handleChange}
                placeholder="Beschrijf je artikel — staat, maat, merk..." rows={4} required />
            </div>

            <div className="db-form-group db-form-group-sm">
              <label>Prijs in Recy's</label>
              <input name="price" type="number" min="1" value={form.price} onChange={handleChange}
                placeholder="bijv. 40" required />
              <span className="db-recys-hint">
                <img src={recy} alt="" className="recy-icon" /> Je hebt {mockUser.recys} Recy's
              </span>
            </div>

            <button type="submit" className="db-submit">Plaatsen</button>
          </form>
        )}
      </div>
    </motion.div>
  )
}
