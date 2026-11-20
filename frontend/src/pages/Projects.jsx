import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SEO from '../components/SEO';
import ProjectModal from '../components/ProjectModal';
import { projectCategories, projects } from '../data/projects';
import '../styles/projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(
      (p) => p.category === filter || p.tags?.includes(filter)
    );
  }, [filter]);

  return (
    <>
      <SEO
        title="Projects | Zar-E-Fishan"
        description="Browse Zar-E-Fishan's portfolio of residential and commercial interior design projects."
      />

      <section
        className="page-hero"
        style={{
          '--hero-image':
            "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>
              Portfolio
            </span>
            <h1>Selected projects</h1>
            <p>
              Explore residential and commercial interiors shaped by light, material,
              and carefully considered detail.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Project categories">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                className={`filter-btn ${filter === category ? 'is-active' : ''}`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.article
                  layout
                  key={project.id}
                  className={`project-card ${i % 5 === 0 ? 'project-card--tall' : ''}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setSelected(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelected(project);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${project.title}`}
                >
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-card__info">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>
                      {project.location} · {project.year}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Projects;
