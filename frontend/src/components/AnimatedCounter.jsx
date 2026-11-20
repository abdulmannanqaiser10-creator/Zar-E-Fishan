import { useEffect, useRef, useState } from 'react';
import useCountUp from '../hooks/useCountUp';

const AnimatedCounter = ({ value, suffix = '', label }) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);
  const count = useCountUp(value, start);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-card__value">
        {count}
        {suffix}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
};

export default AnimatedCounter;
