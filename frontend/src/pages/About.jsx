import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import founderImage from '../assets/founder-ibad-imran-memon.jpg';
import { aboutPhilosophy } from '../data/site';
import '../styles/about.css';

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

const PhilosophyIcon = ({ type }) => {
  const common = {
    viewBox: '0 0 24 24',
    width: '24',
    height: '24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (type === 'elegance') {
    return (
      <svg {...common}>
        <path d="M12 3l2.2 6.6H21l-5.4 4 2.1 6.4L12 16.8 6.3 20l2.1-6.4L3 9.6h6.8L12 3Z" />
      </svg>
    );
  }
  if (type === 'function') {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10h16M10 4v16" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
};

const About = () => (
  <>
    <SEO
      title="About Us | ZAR-E-FISHAN INTERIORS"
      description="Crafting beautiful spaces since day one. Learn about Zar-e-Fishan Interiors."
    />

    <section className="section about-hero">
      <div className="container about-hero__grid">
        <motion.div
          className="about-hero__copy"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="section-label">About Us</p>
          <h1>
            Crafting Beautiful Spaces <em>Since Day One</em>
          </h1>
          <p>
            Established in 2025, Zar-e-Fishan Interiors transforms residential, commercial
            and corporate spaces through thoughtful design, quality materials and
            professional execution. Every project is guided by clarity, craft and care.
          </p>
          <p>
            From first consultation to final styling, we create interiors that feel calm,
            refined and genuinely livable — with personal attention at every stage.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Start a Project →
          </Link>
        </motion.div>

        <motion.div
          className="about-hero__media"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
            alt="Luxury armchair in a calm interior"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>

    <section className="section about-philosophy">
      <div className="container about-philosophy__grid">
        <motion.div className="about-philosophy__media" {...fadeUp}>
          <img
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80"
            alt="Elegant dining room interior"
            loading="lazy"
          />
        </motion.div>
        <motion.div className="about-philosophy__content" {...fadeUp}>
          <p className="section-label">Our Philosophy</p>
          <h2>
            Design that feels as good as it <em>looks</em>
          </h2>
          <p>
            We believe beautiful spaces should also work beautifully. Our approach balances
            aesthetics with practicality — light, flow, materials and detail — so every
            interior supports the way you live and work.
          </p>
        </motion.div>
      </div>

      <div className="container about-philosophy__values">
        {aboutPhilosophy.map((item, i) => (
          <motion.article
            key={item.id}
            className="philosophy-card"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.05 }}
          >
            <span className="philosophy-card__icon">
              <PhilosophyIcon type={item.icon} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>

    <section className="section" id="founder">
      <div className="container">
        <motion.div className="founder-block" {...fadeUp}>
          <div className="founder-block__image">
            <img
              src={founderImage}
              alt="Ibad Imran Memon, Founder and Director of Zar-e-Fishan Interiors"
              loading="lazy"
            />
          </div>
          <div className="founder-block__content">
            <p className="section-label">About Founder</p>
            <h2>Ibad Imran Memon</h2>
            <p className="founder-role">Founder & Director – Zar-e-Fishan Interiors</p>
            <div className="gold-line" />
            <p>
              Ibad Imran Memon is the Founder and Director of Zar-e-Fishan Interiors. With
              seven years of professional experience in the construction-related industry
              and a background in ACCA studies, he brings a strong understanding of business
              operations, project management and the construction sector.
            </p>
            <p>
              Driven by a passion for interior design, he established Zar-e-Fishan Interiors
              to provide practical, elegant and thoughtfully planned interior solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default About;
