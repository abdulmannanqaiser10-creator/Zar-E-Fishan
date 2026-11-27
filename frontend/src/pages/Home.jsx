import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import HeroVideo from '../components/HeroVideo';
import { homeServiceCards, iconBarServices } from '../data/site';
import { projects } from '../data/projects';
import '../styles/home.css';

const featuredProject = projects[0];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const ServiceIconSvg = ({ type }) => {
  const common = {
    viewBox: '0 0 24 24',
    width: '20',
    height: '20',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  switch (type) {
    case 'panels':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="7" height="16" rx="1" />
          <rect x="13" y="4" width="7" height="16" rx="1" />
        </svg>
      );
    case 'vinyl':
      return (
        <svg {...common}>
          <path d="M4 8h16v10H4z" />
          <path d="M4 12h16M8 8v10M16 8v10" />
        </svg>
      );
    case 'wood':
      return (
        <svg {...common}>
          <path d="M4 7h16v10H4z" />
          <path d="M4 10.5h16M4 14h16" />
        </svg>
      );
    case 'spc':
      return (
        <svg {...common}>
          <path d="M5 6h6v6H5zM13 6h6v6h-6zM5 14h6v6H5zM13 14h6v6h-6z" />
        </svg>
      );
    case 'wallpaper':
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="1" />
          <path d="M9 8c2 2 4 2 6 0M9 13c2 2 4 2 6 0" />
        </svg>
      );
    case 'picture':
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="1" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M4 16l5-4 3 2 4-4 4 4" />
        </svg>
      );
    case 'blinds':
      return (
        <svg {...common}>
          <path d="M5 5h14M5 9h14M5 13h14M5 17h14M12 5v14" />
        </svg>
      );
    case 'ceiling':
      return (
        <svg {...common}>
          <path d="M4 18V9l8-4 8 4v9" />
          <path d="M4 11h16" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 4l1.5 5H19l-4 3.2 1.5 5L12 14.5 7.5 17.2l1.5-5L5 9h5.5L12 4z" />
        </svg>
      );
  }
};

const Home = () => (
  <>
    <SEO
      title="ZAR-E-FISHAN INTERIORS | Elegance. Built. Forever."
      description="Transform your space into a masterpiece with premium interior solutions from Zar-e-Fishan Interiors, Karachi."
    />

    <section className="hero">
      <div className="container hero__grid">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero__eyebrow">DESIGN • DECOR • INSPIRE</p>
          <h1>
            <span className="hero__brand">ZAR-E-FISHAN</span>
            <span className="hero__brand-sub">INTERIORS</span>
          </h1>
          <p className="hero__tagline">ELEGANCE. BUILT. FOREVER.</p>
          <p className="hero__lead">
            Transform your space into a masterpiece with our premium interior solutions.
          </p>
          <Link to="/services" className="btn btn-primary">
            Explore Our Services →
          </Link>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <div className="hero__arc" aria-hidden="true" />
          <div className="hero__frame">
            <HeroVideo className="hero__video" src="/Homesection.mp4" />
          </div>
        </motion.div>
      </div>
    </section>

    <section className="icon-bar-wrap">
      <div className="container">
        <div className="icon-bar">
          {iconBarServices.map((item) => (
            <Link
              key={item.id}
              to={`/services#${item.hash}`}
              className="icon-bar__item"
            >
              <span className="icon-bar__icon">
                <ServiceIconSvg type={item.icon} />
              </span>
              <span className="icon-bar__label">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="section services-home">
      <div className="container">
        <motion.div className="section-head section-head--row" {...fadeUp}>
          <div>
            <p className="section-label">Our Services</p>
            <h2 className="section-title">Premium Interior Solutions</h2>
            <p className="section-subtitle">For a Stylish & Comfortable Living</p>
          </div>
          <Link to="/services" className="btn btn-secondary">
            View All Services →
          </Link>
        </motion.div>

        <div className="service-grid">
          {homeServiceCards.map((service, i) => (
            <motion.article
              key={service.id}
              className="service-tile"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
            >
              <Link to={`/services#${service.id}`}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-tile__overlay">
                  <h3>{service.title}</h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="section about-preview">
      <div className="about-preview__watermark" aria-hidden="true">
        Elegance Built Forever
      </div>
      <div className="about-preview__leaf" aria-hidden="true" />
      <div className="container about-preview__grid">
        <motion.div className="about-preview__media" {...fadeUp}>
          <div className="about-preview__curve" aria-hidden="true" />
          <div className="about-preview__image">
            <img
              src="/Projects/image.png"
              alt="Zar-e-Fishan Interiors project showcase"
              loading="lazy"
            />
          </div>
        </motion.div>
        <motion.div className="about-preview__content" {...fadeUp}>
          <p className="section-label">About Zar-E-Fishan</p>
          <h2 className="section-title">Crafting Beautiful Spaces With Passion</h2>
          <div className="gold-line" />
          <p className="about-preview__text">
            Established in 2025, Zar-e-Fishan Interiors transforms residential, commercial
            and corporate spaces through thoughtful design, quality materials and
            professional execution.
          </p>
          <ul className="check-list">
            <li>Premium Quality Materials</li>
            <li>Modern & Elegant Designs</li>
            <li>On-Time Completion</li>
          </ul>
          <Link to="/about" className="btn btn-primary about-preview__btn">
            Learn More →
          </Link>
        </motion.div>
      </div>
    </section>

    <section className="section home-showcase">
      <div className="container">
        <motion.div className="section-head section-head--center" {...fadeUp}>
          <p className="section-label">Featured Project</p>
          <h2 className="section-title">Before &amp; After</h2>
          <p className="section-subtitle">
            Real transformations completed by Zar-e-Fishan Interiors
          </p>
        </motion.div>

        <motion.div className="home-showcase__compare" {...fadeUp}>
          <figure className="home-showcase__frame">
            <img
              src={featuredProject.beforeImage}
              alt={`${featuredProject.title} before`}
              loading="lazy"
            />
            <figcaption>Before</figcaption>
          </figure>
          <figure className="home-showcase__frame">
            <img
              src={featuredProject.afterImage}
              alt={`${featuredProject.title} after`}
              loading="lazy"
            />
            <figcaption>After</figcaption>
          </figure>
        </motion.div>

        <div className="section-cta">
          <Link to="/projects" className="btn btn-primary">
            Explore All Projects →
          </Link>
        </div>
      </div>
    </section>

    <section className="section cta-section">
      <div className="container">
        <motion.div className="cta-band" {...fadeUp}>
          <div className="cta-band__left">
            <span className="cta-band__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-8.5Z" />
              </svg>
            </span>
            <h2>Let&apos;s Design Your Dream Space Together</h2>
          </div>
          <Link to="/contact" className="btn btn-ghost">
            Contact Us →
          </Link>
        </motion.div>
      </div>
    </section>
  </>
);

export default Home;
