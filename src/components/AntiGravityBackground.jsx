import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

// Tracks mouse at the window level so the effect works even when
// the pointer is over text/buttons layered above the canvas
const mouse = { x: 0, y: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    // Convert to [-1, 1] range
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

// Dense grain of custom points for extra depth
function ParticleField({ count = 4000, spread = 20 }) {
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread;
      arr[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return arr;
  }, [count, spread]);

  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.04;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#93c5fd"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// The camera rig reads from the global mouse object so it always responds
const CameraRig = ({ children }) => {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    // Lerp group rotation towards current mouse position
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.x * (Math.PI / 8),
      delta * 2.5
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -mouse.y * (Math.PI / 8),
      delta * 2.5
    );
  });

  return <group ref={groupRef}>{children}</group>;
};

const AntiGravityBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-[#020818] overflow-hidden pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 55 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#3b82f6" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#818cf8" />

        <CameraRig>
          {/* Deep background star field */}
          <Stars radius={120} depth={60} count={4000} factor={4} saturation={0.1} fade speed={0.8} />

          {/* Mid-field dense custom particles */}
          <ParticleField count={2500} spread={25} />

          {/* Foreground glowing blue sparkles - large & bright */}
          <Sparkles count={250} scale={18} size={3} speed={0.3} opacity={0.55} color="#60a5fa" />
          {/* Foreground glowing purple sparkles - smaller accent */}
          <Sparkles count={120} scale={22} size={5} speed={0.15} opacity={0.3} color="#818cf8" noise={3} />
          {/* Tiny fast sparkles close to the camera */}
          <Sparkles count={80} scale={8} size={2} speed={0.6} opacity={0.4} color="#bfdbfe" />
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default AntiGravityBackground;
