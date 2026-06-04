import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';

/**
 * Main App component - Portfolio website
 */
function App() {
  return (
    <div className="relative min-h-screen bg-[var(--app-bg)] text-[var(--app-text)] overflow-hidden">
      <ParticleBackground />
      <CustomCursor />
      <div className="relative z-10">
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
