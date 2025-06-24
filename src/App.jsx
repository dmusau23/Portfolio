import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans transition-all duration-500 ease-in-out">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        handleNavClick={handleNavClick}
      />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </div>
  );
}
