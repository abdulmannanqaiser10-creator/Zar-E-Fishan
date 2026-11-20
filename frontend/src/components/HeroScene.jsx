import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import useMediaQuery from '../hooks/useMediaQuery';

const FloatingForms = ({ reduced }) => {
  const group = useRef();

  useFrame((state) => {
    if (!group.current || reduced) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.12;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.08;
  });

  const materials = useMemo(
    () => ({
      gold: '#C5A675',
      cream: '#F8F5ED',
      olive: '#536043',
    }),
    []
  );

  return (
    <group ref={group}>
      <Float speed={reduced ? 0 : 1.4} rotationIntensity={0.35} floatIntensity={0.8}>
        <mesh position={[-1.4, 0.3, 0]}>
          <icosahedronGeometry args={[0.85, 0]} />
          <MeshDistortMaterial
            color={materials.gold}
            roughness={0.25}
            metalness={0.55}
            distort={reduced ? 0 : 0.25}
            speed={1.5}
          />
        </mesh>
      </Float>

      <Float speed={reduced ? 0 : 1.1} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh position={[1.5, -0.2, -0.4]} rotation={[0.4, 0.6, 0.2]}>
          <torusGeometry args={[0.55, 0.18, 16, 48]} />
          <meshStandardMaterial color={materials.cream} metalness={0.3} roughness={0.35} />
        </mesh>
      </Float>

      <Float speed={reduced ? 0 : 0.9} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0.2, 1.1, -0.8]}>
          <octahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial color={materials.olive} metalness={0.4} roughness={0.4} />
        </mesh>
      </Float>
    </group>
  );
};

const HeroScene = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const reduced = isMobile || prefersReduced;

  if (isMobile) {
    return <div className="hero-scene hero-scene--fallback" aria-hidden="true" />;
  }

  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 4, 2]} intensity={1.1} color="#F8F5ED" />
        <pointLight position={[-3, -1, 2]} intensity={0.6} color="#C5A675" />
        <Suspense fallback={null}>
          <FloatingForms reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroScene;
