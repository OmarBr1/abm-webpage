import { Phone, Mail, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-column">
          <h3 className="footer-heading">À Propos</h3>
          <p className="footer-text">
            ABM BeeVenom est dédié à l'excellence apicole en Algérie. Nous
            proposons des solutions innovantes pour la collecte et la valorisation
            du venin d’abeille, tout en garantissant le bien-être des abeilles.
          </p>
        </div>

        {/* Column 2: Contact Info */}
        <div className="footer-column">
          <h3 className="footer-heading">Contactez-nous</h3>
          <ul className="footer-links">
            <li>
              <Phone size={18} className="footer-icon" />
              <a href="tel:+213559918231" className="footer-link">
                +213 559 918 231
              </a>
            </li>
            <li>
              <Mail size={18} className="footer-icon" />
              <a href="mailto:abmbeevenom@gmail.com" className="footer-link">
                abmbeevenom@gmail.com
              </a>
            </li>
            <li>
              <Globe size={18} className="footer-icon" />
              <a
                href="https://www.abmbeevenom.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                www.abmbeevenom.com
              </a>
            </li>
            <li>
              <span className="footer-icon">📍</span>
              <span className="footer-link">Constantine, Algérie 25000</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-heading">Liens Rapides</h3>
          <ul className="footer-links">
            <li>
              <a href="#accueil" className="footer-link">
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="footer-link">
                À Propos
              </a>
            </li>
            <li>
              <a href="#services" className="footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="#valeurs" className="footer-link">
                Valeurs
              </a>
            </li>
            <li>
              <a href="#missions" className="footer-link">
                Missions
              </a>
            </li>
            <li>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p className="footer-bottom-text">
          &copy; {new Date().getFullYear()} ABM BeeVenom. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
