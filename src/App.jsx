import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem('portfolio-theme') === 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = isLightMode ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', isLightMode ? 'light' : 'dark');
  }, [isLightMode]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        handleNavClick={handleNavClick}
        isLightMode={isLightMode}
        setIsLightMode={setIsLightMode}
      />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      </div>
  );
}
