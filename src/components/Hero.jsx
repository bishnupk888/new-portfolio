import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config for smooth, slightly laggy feel
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  // Map mouse position to a small rotation/translate for the name
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize to [-0.5, 0.5]
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">

      {/* Profile image with the same 3D mouse parallax */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          transformStyle: 'preserve-3d',
          transformPerspective: 800,
        }}
        className="mb-6"
      >
        <img
          src="https://github.com/bishnupk888.png"
          alt="Bishnu PK"
          className="w-40 h-40 rounded-full border-4 border-blue-500 object-cover shadow-lg"
        />
      </motion.div>

      {/* Name text with subtle 3D mouse parallax */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        style={{
          rotateX,
          rotateY,
          x: translateX,
          transformStyle: 'preserve-3d',
          transformPerspective: 800,
        }}
      >
        Hi, I'm{' '}
        <motion.span
          className="text-blue-500 inline-block"
          style={{
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          Bishnu PK
        </motion.span>
      </motion.h1>

      <p className="mt-4 text-gray-400 max-w-xl">
        I build modern web applications using the MERN Stack.
      </p>

      <a
        href="#projects"
        className="mt-6 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200"
      >
        View Projects
      </a>

    </section>
  );
}

export default Hero;