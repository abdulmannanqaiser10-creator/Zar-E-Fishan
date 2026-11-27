import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const NotFound = () => (
  <>
    <SEO title="Page Not Found | ZAR-E-FISHAN INTERIORS" description="The page you are looking for does not exist." />
    <section
      className="section"
      style={{
        minHeight: '60vh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
      }}
    >
      <motion.div className="container" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
        <p className="section-script">404</p>
        <h1 className="section-title" style={{ marginInline: 'auto' }}>
          This page has not been designed yet
        </h1>
        <p className="section-subtitle" style={{ marginInline: 'auto' }}>
          Return home or explore our services and projects.
        </p>
        <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
          <Link to="/services" className="btn btn-secondary">
            Our Services
          </Link>
        </div>
      </motion.div>
    </section>
  </>
);

export default NotFound;
