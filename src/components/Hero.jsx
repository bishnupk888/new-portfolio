import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Notification from './Notification';
// Forced update to ensure social links reflect latest changes

const socialLinks = [
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/bishnupk', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    )
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/bishnupk888', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    )
  },
  { 
    name: 'Instagram', 
    url: 'https://instagram.com/_bi8hnu', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    )
  },
  { 
    name: 'Facebook', 
    url: 'https://www.facebook.com/bishnu.bichus', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    )
  },
  { 
    name: 'Twitter', 
    url: '#', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
    )
  },
];

function Hero() {
  const [showNotification, setShowNotification] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-6, 6]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 md:pt-0 relative overflow-hidden">
      <AnimatePresence>
        {showNotification && (
          <Notification 
            type="info"
            message="temporarly not available"
            onClose={() => setShowNotification(false)}
          />
        )}
      </AnimatePresence>
      
      {/* Profile image with 3D parallax */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          transformStyle: 'preserve-3d',
          transformPerspective: 800,
        }}
        className="mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <img
            src="https://github.com/bishnupk888.png"
            alt="Bishnu PK"
            className="relative w-40 h-40 rounded-full border-4 border-white/10 object-cover shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Name and Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Bishnu PK
          </span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer specializing in the MERN Stack. 
          Crafting modern, scalable, and user-centric web applications.
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        className="flex gap-4 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target={(!social.url || social.url === '#') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (!social.url || social.url === '#' || social.url === '') {
                e.preventDefault();
                setShowNotification(true);
                setTimeout(() => setShowNotification(false), 3000);
              }
            }}
            className="p-3 glass-card hover:text-blue-400 !scale-100 hover:!scale-110 !rounded-full"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a
          href="#projects"
          className="glass-btn px-8 py-4 text-lg font-bold !bg-blue-500 !text-white hover:!bg-blue-600"
        >
          View Projects
        </a>
        <a
          href="https://drive.google.com/file/d/1B6KAOpH2RJIw_XrulwxiNM-JgUQrQ6F7/view?usp=sharing"
          target="_blank"
          className="glass-btn px-8 py-4 text-lg font-bold"
        >
          View Resume
        </a>
      </motion.div>

    </section>
  );
}

export default Hero;