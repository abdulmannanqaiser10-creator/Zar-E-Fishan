import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import AnimatedCounter from '../components/AnimatedCounter';
import TestimonialSlider from '../components/TestimonialSlider';
import ServiceIcon from '../components/ServiceIcon';
import useGsapReveal from '../hooks/useGsapReveal';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { stats } from '../data/testimonials';
import '../styles/home.css';

const HeroScene = lazy(() => import('../components/HeroScene'));

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const Home = () => {
  const revealRef = useGsapReveal();
  const featured = projects.slice(0, 3);
  const previewServices = services.slice(0, 6);

  return (
    <div ref={revealRef}>
      <SEO
        title="Zar-E-Fishan | Premium Interior Design"
        description="Transforming spaces into timeless experiences. Luxury residential and commercial interior design by Zar-E-Fishan."
      />

      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <Suspense fallback={<div className="hero-scene hero-scene--fallback" aria-hidden="true" />}>
          <HeroScene />
        </Suspense>
        <div className="container hero__content">
          <motion.p
            className="hero__brand"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Zar-E-Fishan
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
          >
            Transforming Spaces Into Timeless Experiences.
          </motion.h1>
          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            A luxury interior design atelier crafting serene homes and refined
            commercial environments with quiet sophistication.
          </motion.p>
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.58 }}
          >
            <Link to="/projects" className="btn btn-primary">
              Explore Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} data-reveal>
            <span className="section-label">Featured Work</span>
            <h2 className="section-title">Spaces shaped with intention</h2>
            <p className="section-subtitle">
              A selection of recent interiors defined by material honesty, balanced
              proportion, and lasting atmosphere.
            </p>
          </motion.div>

          <div className="featured-grid">
            {featured.map((project, i) => (
              <motion.article
                key={project.id}
                className="featured-card"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              >
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="featured-card__overlay">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div {...fadeUp} style={{ marginTop: '2rem' }}>
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-cream-dark)' }}>
        <div className="container">
          <motion.div {...fadeUp}>
            <span className="section-label">Services</span>
            <h2 className="section-title">Design services for every space</h2>
            <p className="section-subtitle">
              From first concept sketches to final styling, we guide every stage with
              clarity and craft.
            </p>
          </motion.div>

          <div className="services-preview">
            {previewServices.map((service, i) => (
              <motion.article
                key={service.id}
                className="service-preview-card"
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              >
                <ServiceIcon name={service.icon} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.article>
            ))}
          </div>

          <motion.div {...fadeUp} style={{ marginTop: '2rem' }}>
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="why-grid">
            <motion.div {...fadeUp}>
              <span className="section-label">Why Zar-E-Fishan</span>
              <h2 className="section-title">Luxury rooted in lived experience</h2>
              <div className="gold-line" />
              <div className="why-points">
                {[
                  {
                    num: '01',
                    title: 'Bespoke Design Language',
                    text: 'Every project begins with your rituals, light, and architecture — never a template.',
                  },
                  {
                    num: '02',
                    title: 'Material Integrity',
                    text: 'We specify enduring finishes and furnishings that age with quiet beauty.',
                  },
                  {
                    num: '03',
                    title: 'End-to-End Stewardship',
                    text: 'From planning and visualization to renovation and styling, we stay close.',
                  },
                ].map((item) => (
                  <div className="why-point" key={item.num}>
                    <div className="why-point__num">{item.num}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="why-image" {...fadeUp}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury interior living space"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="stats-row">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.id}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div {...fadeUp} style={{ textAlign: 'center', marginInline: 'auto' }}>
            <span className="section-label">Testimonials</span>
            <h2 className="section-title" style={{ marginInline: 'auto' }}>
              Voices from our clients
            </h2>
            <p className="section-subtitle" style={{ marginInline: 'auto' }}>
              Relationships built on trust, clarity, and spaces that feel unmistakably yours.
            </p>
          </motion.div>
          <TestimonialSlider />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div className="cta-banner" {...fadeUp}>
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>
              Begin Your Journey
            </span>
            <h2>Ready to transform your space?</h2>
            <p>
              Share your vision with Zar-E-Fishan. We will craft a tailored design
              path for your home or workplace.
            </p>
            <div className="cta-banner__actions">
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
