import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { serviceCatalog } from '../data/serviceCatalog';
import '../styles/services.css';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

const Services = () => (
  <>
    <SEO
      title="Our Services | ZAR-E-FISHAN INTERIORS"
      description="Wall decor, flooring, window blinds, wood works, false ceilings, PVC folding doors and home decor from Zar-e-Fishan Interiors."
    />

    <section className="section services-hero">
      <div className="container services-hero__grid">
        <motion.div
          className="services-hero__copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="section-label">Our Services</p>
          <h1>
            Tailored Interior <em>Solutions for You</em>
          </h1>
          <p>
            Explore our full range of premium materials and finishes — from wall
            decor and flooring to blinds, wood works, ceilings and home accents.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get A Quote →
          </Link>
        </motion.div>

        <motion.div
          className="services-hero__media"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <img
            src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury bedroom interior"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>

    <section className="section services-catalog">
      <div className="container">
        <div className="services-catalog__nav" aria-label="Service categories">
          {serviceCatalog.map((category) => (
            <a key={category.id} href={`#${category.id}`} className="services-catalog__chip">
              {category.title}
            </a>
          ))}
        </div>

        <div className="services-catalog__list">
          {serviceCatalog.map((category, i) => (
            <motion.article
              key={category.id}
              id={category.id}
              className={`service-category ${i % 2 === 1 ? 'service-category--reverse' : ''}`}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.04 }}
            >
              <div className="service-category__media">
                <img src={category.image} alt={category.title} loading="lazy" />
              </div>
              <div className="service-category__body">
                <p className="section-label">{category.title}</p>
                <h2>{category.title}</h2>
                <p className="service-category__desc">{category.description}</p>
                <ul className="service-category__products">
                  {category.products.map((product) => (
                    <li key={product}>{product}</li>
                  ))}
                </ul>
                <Link to="/contact" className="service-category__cta">
                  Enquire about {category.title} →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Services;
