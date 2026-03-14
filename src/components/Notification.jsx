import { motion } from 'framer-motion';

const Notification = ({ message, type, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, x: '-50%' }}
    animate={{ opacity: 1, y: 0, x: '-50%' }}
    exit={{ opacity: 0, y: 20, x: '-50%' }}
    className={`fixed bottom-10 left-1/2 z-50 px-6 py-3 rounded-2xl glass-card border flex items-center gap-3 min-w-[320px] shadow-2xl ${
      type === 'success' ? 'border-green-500/30' : 
      type === 'info' ? 'border-blue-500/30' : 'border-red-500/30'
    }`}
    style={{ backdropFilter: 'blur(16px)', background: 'rgba(255, 255, 255, 0.05)' }}
  >
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
      type === 'success' ? 'bg-green-500/20 text-green-400' : 
      type === 'info' ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'
    }`}>
      {type === 'success' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      ) : type === 'info' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12.01" y2="16"></line><line x1="12" y1="12" x2="12" y2="8"></line></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      )}
    </div>
    <div className="flex-1 text-left">
      <p className="text-white text-sm leading-snug">{message}</p>
    </div>
    <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
  </motion.div>
);

export default Notification;
