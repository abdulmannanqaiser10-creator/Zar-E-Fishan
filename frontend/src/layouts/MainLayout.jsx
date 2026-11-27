import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';

const MainLayout = () => {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <>
      <ScrollProgress />
      <div className="site-header">
        <TopBar />
        <Navbar />
      </div>
      <motion.main
        key={location.pathname}
        className="page-transition"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <WhatsAppButton floating />
      <ScrollToTop />
    </>
  );
};

export default MainLayout;
