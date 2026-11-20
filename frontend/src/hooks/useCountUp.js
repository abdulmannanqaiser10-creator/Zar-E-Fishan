import { useEffect, useState } from 'react';

const useCountUp = (end, start = false, duration = 1800) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let frameId;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [end, start, duration]);

  return value;
};

export default useCountUp;
