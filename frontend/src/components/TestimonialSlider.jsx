import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <div className="testimonial-slider">
      <AnimatePresence mode="wait">
        <motion.blockquote
          key={item.id}
          className="testimonial-slider__card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45 }}
        >
          <p>“{item.quote}”</p>
          <footer>
            <img src={item.image} alt="" loading="lazy" width="56" height="56" />
            <div>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </div>
          </footer>
        </motion.blockquote>
      </AnimatePresence>

      <div className="testimonial-slider__dots" role="tablist" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial ${i + 1}`}
            className={i === index ? 'is-active' : ''}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
