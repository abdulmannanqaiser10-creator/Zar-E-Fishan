import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import PageLoader from './components/PageLoader';

const ScrollToTopOnRoute = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.replace('#', ''));
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!scrollToHash()) {
        const timer = window.setTimeout(scrollToHash, 80);
        return () => window.clearTimeout(timer);
      }
      return undefined;
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
};

const AppRoutes = () => (
  <>
    <ScrollToTopOnRoute />
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AnimatePresence mode="wait">{loading && <PageLoader />}</AnimatePresence>
        {!loading && <AppRoutes />}
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
