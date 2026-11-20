import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="project-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="project-modal__close" onClick={onClose} aria-label="Close">
              ×
            </button>

            <div className="project-modal__media">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>

            <div className="project-modal__body">
              <p className="section-label">{project.category}</p>
              <h2 id="project-modal-title">{project.title}</h2>
              <p className="project-modal__meta">
                {project.location} · {project.year}
              </p>
              <p>{project.description}</p>

              <div className="project-modal__compare">
                <div>
                  <span>Before</span>
                  <img src={project.beforeImage} alt={`${project.title} before`} loading="lazy" />
                </div>
                <div>
                  <span>After</span>
                  <img src={project.afterImage} alt={`${project.title} after`} loading="lazy" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
