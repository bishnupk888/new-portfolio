import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AntiGravityBackground from "./components/AntiGravityBackground"
import Loader from "./components/Loader"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide loader when window fully loads (images, fonts, 3D assets etc.)
    const handleLoad = () => {
      // Small extra delay so the 3D canvas gets a moment to initialise
      setTimeout(() => setLoading(false), 600);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <div className="relative text-white min-h-screen bg-transparent">

      {/* Full-screen loader — fades out once the page is ready */}
      <Loader isVisible={loading} />

      <AntiGravityBackground />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App