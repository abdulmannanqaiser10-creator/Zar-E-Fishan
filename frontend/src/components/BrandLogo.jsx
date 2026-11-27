import { Link } from 'react-router-dom';
import './BrandLogo.css';

const BrandLogo = ({ variant = 'dark', className = '' }) => (
  <Link
    to="/"
    className={`brand-logo brand-logo--${variant} ${className}`}
    aria-label="ZAR-E-FISHAN INTERIORS home"
  >
    <img
      src="/logo.png"
      alt="ZAR-E-FISHAN INTERIORS"
      className="brand-logo__img"
      width="180"
      height="64"
      decoding="async"
    />
  </Link>
);

export default BrandLogo;
