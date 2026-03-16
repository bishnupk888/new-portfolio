import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Notification from './Notification';

// ─── EMAILJS CONFIGURATION ───────────────────────────────────────
const SERVICE_ID = 'service_q0fwxs9';
const TEMPLATE_ID = 'template_44fcbjk';
const PUBLIC_KEY = 'E_5u891hls6yjLFDb';
// ─────────────────────────────────────────────────────────────────

// Initialize EmailJS once at the top level
emailjs.init(PUBLIC_KEY);

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errorDetails, setErrorDetails] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        setShowNotification(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setShowNotification(false);
          setStatus('');
        }, 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('error');
        const errorMessage = err?.text || err?.message || JSON.stringify(err);
        setErrorDetails(errorMessage);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
          setStatus('');
        }, 10000);
      });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto relative min-h-screen flex items-center">
      <AnimatePresence>
        {showNotification && (
          <Notification 
            type={status}
            message={status === 'success' ? 'Your message has been sent successfully!' : `Failed to send: ${errorDetails}`}
            onClose={() => setShowNotification(false)}
          />
        )}
      </AnimatePresence>

      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Let's build <br />
              <span className="text-blue-500">something great.</span>
            </h2>
            <p className="text-gray-400 text-xl leading-relaxed max-w-md">
              Currently available for new projects and collaborations. 
              Drop me a line and let's discuss your ideas.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Email me at</p>
                <p className="text-white font-semibold">bishnupk888@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p className="text-sm text-gray-400 font-medium">Location</p>
                <p className="text-white font-semibold">Kerala, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-10 border border-white/10 hover:border-blue-500/20 transition-colors duration-500 relative"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-white/[0.01] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-white/[0.01] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full bg-white/[0.01] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'sending'}
              className={`w-full py-5 rounded-2xl text-lg font-bold tracking-wide transition-all duration-300 ${
                status === 'sending' 
                  ? 'bg-blue-500/50 cursor-not-allowed text-white/50' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-xl shadow-blue-900/20'
              }`}
            >
              {status === 'sending' ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : status === 'success' ? (
                'Message Sent!'
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;