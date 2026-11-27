import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { site } from '../data/site';
import './Footer.css';

const IconFb = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M14 9h2.5V6.2C16.1 5.9 15 5.7 13.8 5.7 11.3 5.7 9.7 7.2 9.7 10v2H7.5v3h2.2V21h3v-6h2.4l.4-3h-2.8V10.3c0-.9.3-1.3 1.3-1.3Z" />
  </svg>
);

const IconIg = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M12 3.5A5.5 5.5 0 0 0 6.5 9c0 3.8 5.5 11 5.5 11s5.5-7.2 5.5-11A5.5 5.5 0 0 0 12 3.5Zm0 7.8a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6Z" />
  </svg>
);

const IconIn = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M6.5 9.5H3.7V20h2.8V9.5ZM5.1 4a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3ZM20.3 20h-2.8v-5.6c0-1.5-.6-2.5-2-2.5-1.05 0-1.65.7-1.92 1.4-.1.24-.08.57-.08.9V20H10.9s.04-9.2 0-10.5h2.8v1.5c.37-.57 1.04-1.38 2.54-1.38 1.85 0 3.24 1.2 3.24 3.8V20Z" />
  </svg>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer__top">
      <BrandLogo />
      <p className="footer__tagline">{site.tagline}</p>
      <div className="footer__social">
        <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><IconFb /></a>
        <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><IconIg /></a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest"><IconPin /></a>
        <a href={`mailto:${site.email}`} aria-label="Email"><IconIn /></a>
      </div>
    </div>

    <div className="footer__links">
      <div className="container footer__links-inner">
        <nav aria-label="Footer">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="footer__contact-line">
          <a href={site.phoneHref}>{site.phone}</a>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>
    </div>

    <div className="footer__bottom">
      <div className="container footer__bottom-inner">
        <p>© 2026 Zar-E-Fishan Interiors. All Rights Reserved.</p>
        <p className="footer__powered">
          Powered By{' '}
          <a
            href="https://lexcoresolution.com"
            target="_blank"
            rel="noreferrer"
          >
            Lexcore Solutions
          </a>
        </p>
        <div className="footer__legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
