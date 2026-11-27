import { motion } from 'framer-motion';
import './PageLoader.css';

const PageLoader = () => (
  <motion.div
    className="page-loader"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="page-loader__inner">
      <motion.img
        src="/logo.png"
        alt=""
        className="page-loader__logo"
        width="64"
        height="64"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      />
      <motion.span
        className="page-loader__brand"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        ZAR-E-FISHAN
      </motion.span>
      <div className="page-loader__line">
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  </motion.div>
);

export default PageLoader;
