import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <h3>Zar-E-Fishan</h3>
          <p>
            Crafting timeless interiors where architecture, material, and emotion
            meet in quiet luxury.
          </p>
          <div className="footer__social">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              IG
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              FB
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
              PI
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              LI
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Residential Design</Link></li>
            <li><Link to="/services">Commercial Design</Link></li>
            <li><Link to="/services">3D Visualization</Link></li>
            <li><Link to="/services">Full Renovation</Link></li>
          </ul>
        </div>

        <div>
          <h4>Visit</h4>
          <ul className="footer__contact">
            <li>12 Design Avenue, Gulberg</li>
            <li>Lahore, Pakistan</li>
            <li>
              <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || 'hello@zarefishan.com'}`}>
                {import.meta.env.VITE_CONTACT_EMAIL || 'hello@zarefishan.com'}
              </a>
            </li>
            <li>
              <a href={`tel:${(import.meta.env.VITE_CONTACT_PHONE || '+923001234567').replace(/\s/g, '')}`}>
                {import.meta.env.VITE_CONTACT_PHONE || '+92 300 123 4567'}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Zar-E-Fishan. All rights reserved.</p>
          <p>Premium Interior Design Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
