import useScrollProgress from '../hooks/useScrollProgress';
import './ScrollProgress.css';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress__bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ScrollProgress;
