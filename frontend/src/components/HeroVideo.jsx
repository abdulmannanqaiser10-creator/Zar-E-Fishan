import { useEffect, useRef } from 'react';

const HeroVideo = ({ className = '', src = '/Homesection.mp4' }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.playsInline = true;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // Browsers may require another attempt after data is ready.
      }
    };

    tryPlay();
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('loadeddata', tryPlay);

    return () => {
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('loadeddata', tryPlay);
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      controls={false}
      aria-label="Zar-e-Fishan interiors showcase video"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default HeroVideo;
