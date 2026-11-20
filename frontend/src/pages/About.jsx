import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { milestones } from '../data/testimonials';
import '../styles/about.css';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

const About = () => (
  <>
    <SEO
      title="About | Zar-E-Fishan"
      description="Discover the story, vision, and design philosophy behind Zar-E-Fishan — a premium interior design studio."
    />

    <section
      className="page-hero"
      style={{
        '--hero-image':
          "url('https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label" style={{ color: 'var(--color-gold)' }}>
            About Us
          </span>
          <h1>Design with quiet confidence</h1>
          <p>
            Zar-E-Fishan is a luxury interior design studio devoted to creating
            spaces that feel timeless, personal, and deeply lived-in.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="section">
      <div className="container about-intro">
        <motion.div {...fadeUp}>
          <span className="section-label">Our Story</span>
          <h2 className="section-title">Where craft meets atmosphere</h2>
          <div className="gold-line" />
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
            Founded with a belief that interiors should age gracefully, Zar-E-Fishan
            began as a boutique atelier specializing in residential sanctuaries.
            Today, we design homes, workplaces, and hospitality spaces with the same
            devotion to proportion, material, and light.
          </p>
          <p style={{ color: 'var(--color-text-muted)' }}>
            Our vision is simple: elevate everyday living through considered design —
            never loud, always enduring.
          </p>
        </motion.div>
        <motion.div className="about-intro__image" {...fadeUp}>
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80"
            alt="Elegant interior design studio atmosphere"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-cream-dark)' }}>
      <div className="container">
        <motion.div {...fadeUp}>
          <span className="section-label">Mission & Values</span>
          <h2 className="section-title">What guides every project</h2>
        </motion.div>
        <div className="values-grid">
          {[
            {
              title: 'Mission',
              text: 'To craft interiors that balance beauty and function — spaces people return to with ease and pride.',
            },
            {
              title: 'Philosophy',
              text: 'Less decoration, more intention. We design for light, ritual, and the quiet luxury of well-chosen materials.',
            },
            {
              title: 'Values',
              text: 'Integrity, collaboration, and meticulous detailing from first consultation through final installation.',
            },
          ].map((item, i) => (
            <motion.article
              key={item.title}
              className="value-card"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <motion.div className="designer-block" {...fadeUp}>
          <div className="designer-block__image">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
              alt="Lead interior designer"
              loading="lazy"
            />
          </div>
          <div className="designer-block__content">
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>
              Principal Designer
            </span>
            <h2>Ayesha Farooq</h2>
            <p>
              With over a decade of experience in luxury residential and commercial
              interiors, Ayesha leads Zar-E-Fishan with a refined eye for composition
              and a deep respect for how people inhabit space.
            </p>
            <p>
              Her work is defined by layered neutrals, sculptural furniture, and a
              seamless dialogue between architecture and interior atmosphere.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="section" style={{ background: 'var(--color-cream-dark)' }}>
      <div className="container">
        <motion.div {...fadeUp}>
          <span className="section-label">Milestones</span>
          <h2 className="section-title">A decade of considered growth</h2>
        </motion.div>
        <div className="timeline">
          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              className="timeline-item"
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
            >
              <div className="timeline-item__dot" aria-hidden="true" />
              <div className="timeline-item__card">
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default About;
