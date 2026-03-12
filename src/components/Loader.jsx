import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#020818]"
        >
          {/* Pulsing glowing ring */}
          <div className="relative flex items-center justify-center">
            {/* Outer spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              className="w-20 h-20 rounded-full border-2 border-transparent border-t-blue-500 border-r-blue-400"
            />
            {/* Middle spinning ring (opposite direction) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
              className="absolute w-14 h-14 rounded-full border-2 border-transparent border-t-indigo-400 border-l-indigo-500"
            />
            {/* Center pulsing dot */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_12px_4px_rgba(96,165,250,0.7)]"
            />
          </div>

          {/* Name / brand text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-blue-400 text-sm tracking-[0.3em] uppercase font-light"
          >
            Bishnu PK
          </motion.p>

          {/* Subtle tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-2 text-gray-500 text-xs tracking-widest"
          >
            Loading portfolio...
          </motion.p>

          {/* Tiny stars scattered in background of loader */}
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-300"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0.1, 0.8, 0.1] }}
              transition={{
                repeat: Infinity,
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
