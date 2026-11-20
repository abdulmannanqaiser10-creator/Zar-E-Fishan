import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const NotFound = () => (
  <>
    <SEO title="Page Not Found | Zar-E-Fishan" description="The page you are looking for does not exist." />
    <section
      className="section"
      style={{
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        paddingTop: 'calc(var(--header-height) + 3rem)',
      }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="section-label">404</p>
        <h1 className="section-title" style={{ marginInline: 'auto' }}>
          This page has not been designed yet
        </h1>
        <p className="section-subtitle" style={{ marginInline: 'auto' }}>
          The space you are looking for does not exist. Return home or explore our projects.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
          <Link to="/projects" className="btn btn-outline">
            View Projects
          </Link>
        </div>
      </motion.div>
    </section>
  </>
);

export default NotFound;
