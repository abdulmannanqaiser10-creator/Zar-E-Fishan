import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ServiceIcon from '../components/ServiceIcon';
import { services } from '../data/services';
import '../styles/services.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5 },
};

const Services = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <SEO
        title="Services | Zar-E-Fishan"
        description="Explore Zar-E-Fishan interior design services including residential, commercial, kitchen, bedroom, and full renovations."
      />

      <section
        className="page-hero"
        style={{
          '--hero-image':
            "url('https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>
              Services
            </span>
            <h1>Design services with depth</h1>
            <p>
              Comprehensive interior solutions — from spatial planning and 3D
              visualization to complete renovations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.article
                key={service.id}
                className={`service-card ${openId === service.id ? 'is-open' : ''}`}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 4) * 0.05 }}
              >
                <div className="service-card__image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className="service-card__body">
                  <div className="service-card__icon">
                    <ServiceIcon name={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button
                    type="button"
                    className="service-card__link"
                    onClick={() =>
                      setOpenId((prev) => (prev === service.id ? null : service.id))
                    }
                  >
                    Learn More <span aria-hidden="true">→</span>
                  </button>
                  <div className="service-detail">
                    Our team develops a tailored concept, material palette, and
                    implementation plan for {service.title.toLowerCase()}, ensuring
                    clarity from consultation to completion.
                    {' '}
                    <Link to="/contact">Request a consultation</Link>.
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
