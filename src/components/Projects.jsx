import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Notification from './Notification';
import project1Img from '../assets/images/project1.jpg';
import project1bImg from '../assets/images/project1b.jpg';
import project1cImg from '../assets/images/project1c.jpg';
import project2Img from '../assets/images/project2.jpg';
import project2bImg from '../assets/images/project2b.jpg';
import project2cImg from '../assets/images/project2c.jpg';
import project3Img from '../assets/images/project3.jpg';
import project3bImg from '../assets/images/project3b.jpg';
import project3cImg from '../assets/images/project3c.jpg';

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide every 3 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Project Slide"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              i === index ? 'bg-blue-500' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Sportzone",
    desc: "SportZone is a web-based sports booking platform that allows users to easily find and book sports trainers and training sessions. The application provides features such as user registration, slot booking, trainer interaction, notifications, and online payments. It helps sports enthusiasts conveniently schedule online sessions, connect with trainers, and manage their bookings in one place.",
    images: [project1Img, project1bImg, project1cImg],
    github: "https://github.com/bishnupk888/sportzone-.git",
    live: "#",
  },
  {
    title: "Timer watch store",
    desc: "Timer Watch Store is an e-commerce web application built using HTML, CSS, MongoDB, Node.js, and Express.js. It allows users to browse and purchase different types of watches through a simple and user-friendly interface. The application includes features such as product listing, user authentication, cart management, and order handling, providing a smooth online shopping experience.",
    images: [project2Img, project2bImg, project2cImg],
    github: "https://github.com/bishnupk888/Timer-Watch-Store.git",
    live: "#",
  },
  {
    title: "Weather App",
    desc: "A sleek and responsive Weather Application built with React.js that provides real-time weather updates, forecasts, and location-based data. It features a modern UI with dynamic backgrounds and smooth transitions, fetching data from weather APIs to deliver accurate atmospheric information.",
    images: [project3Img, project3bImg, project3cImg],
    github: "https://github.com/bishnupk888/weather-app.git",
    live: "#",
  },
];

function Projects() {
  const [showNotification, setShowNotification] = useState(false);

  const handleLinkClick = (e, url) => {
    if (!url || url === '#' || url === '') {
      e.preventDefault();
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <AnimatePresence>
        {showNotification && (
          <Notification 
            type="info"
            message="temporarly not available"
            onClose={() => setShowNotification(false)}
          />
        )}
      </AnimatePresence>
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} className="glass-card flex flex-col overflow-hidden">
            {/* Project Carousel */}
            <div className="h-48 overflow-hidden relative">
              <ImageCarousel images={project.images} />
            </div>
            
            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{project.desc}</p>
              
              {/* Links Container */}
              <div className="flex gap-4 mt-auto">
                <a 
                  href={project.github} 
                  target={(!project.github || project.github === '#') ? '_self' : '_blank'} 
                  rel="noreferrer"
                  onClick={(e) => handleLinkClick(e, project.github)}
                  className="glass-btn text-sm flex-1 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  GitHub
                </a>
                <a 
                  href={project.live} 
                  target={(!project.live || project.live === '#') ? '_self' : '_blank'} 
                  rel="noreferrer"
                  onClick={(e) => handleLinkClick(e, project.live)}
                  className="glass-btn text-sm flex-1 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;