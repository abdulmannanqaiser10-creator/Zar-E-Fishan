import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SEO from '../components/SEO';
import ProjectModal from '../components/ProjectModal';
import { projectCategories, projects } from '../data/projects';
import '../styles/projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(
      (p) => p.category === filter || p.tags?.includes(filter)
    );
  }, [filter]);

  const visible = showAll ? filtered : filtered.slice(0, 6);

  return (
    <>
      <SEO
        title="Our Projects | ZAR-E-FISHAN INTERIORS"
        description="Ideas brought to life — explore residential, commercial, modern and luxury interior projects."
      />

      <section className="section projects-page">
        <div className="container">
          <motion.div
            className="section-head section-head--center projects-page__head"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="section-label">Portfolio</p>
            <h1 className="projects-page__title">
              Ideas Brought <em>to Life</em>
            </h1>
          </motion.div>

          <div className="filters" role="tablist" aria-label="Project categories">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                className={`filter-btn ${filter === category ? 'is-active' : ''}`}
                onClick={() => {
                  setFilter(category);
                  setShowAll(false);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  className="project-card"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
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
                  <div className="project-card__overlay">
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="section-cta">
            {filtered.length > 6 && !showAll ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setShowAll(true)}
              >
                View More Projects →
              </button>
            ) : (
              <Link to="/contact" className="btn btn-primary">
                Start Your Project →
              </Link>
            )}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Projects;
