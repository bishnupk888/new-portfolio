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
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto relative">
      <AnimatePresence>
        {showNotification && (
          <Notification 
            type={status}
            message={status === 'success' ? 'Your message has been sent successfully!' : `Failed to send: ${errorDetails}`}
            onClose={() => setShowNotification(false)}
          />
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-500">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-lg">
          Have a project in mind? Let's build something amazing together.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card p-8 md:p-10"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tell me about your project..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className={`glass-btn w-full py-4 text-lg font-bold ${
              status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
            } ${status === 'success' ? 'bg-green-500/20 text-green-300 border-green-500/40' : ''} ${
              status === 'error' ? 'bg-red-500/20 text-red-300 border-red-500/40' : ''
            }`}
          >
            {status === 'sending' ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : status === 'success' ? (
              'Message Sent!'
            ) : status === 'error' ? (
              'Failed to Send. Try Again!'
            ) : (
              'Send Message'
            )}
          </button>
          
          {status === 'error' && (
            <p className="mt-4 text-red-500 text-sm font-medium animate-pulse">
              Error: {errorDetails}
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;