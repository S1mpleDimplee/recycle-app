import { Link } from 'react-router-dom'
import { logogreen } from '../Icons/Icons'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logogreen} alt="Tradr" />
          </div>
          <p>
            De marktplaats zonder echt geld. Verkoop je ongebruikte spullen,
            verdien Recy's en koop van anderen.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigatie</h4>
          <ul>
            <li><Link to="/">Thuis</Link></li>
            <li><Link to="/over-tradr">Over Tradr</Link></li>
            <li><Link to="/aan-de-slag">Aan de slag</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            info@tradr.nl<br />
            +31 00 123 4567<br />
            Almelo, Nederland
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Tradr. Alle rechten voorbehouden.</p>
      </div>
    </footer>
  )
}
