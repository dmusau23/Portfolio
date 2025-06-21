import React from 'react';

export default function Header({ isMenuOpen, setIsMenuOpen, handleNavClick }) {
  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50 transition duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Daniel Musau Logo"
            className="h-10 w-auto transition duration-300"
          />
          <h1 className="text-2xl font-bold text-cyan-400 transition duration-300">
            Daniel Musau
          </h1>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none transition-transform duration-300 transform hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex space-x-4">
          <a href="#about" onClick={handleNavClick} className="hover:text-cyan-400 transition duration-300">About</a>
          <a href="#projects" onClick={handleNavClick} className="hover:text-cyan-400 transition duration-300">Projects</a>
          <a href="#contact" onClick={handleNavClick} className="hover:text-cyan-400 transition duration-300">Contact</a>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-2 space-y-2 animate-fade-in text-center">
          <a href="#about" onClick={handleNavClick} className="block text-white hover:text-cyan-400 transition duration-300">About</a>
          <a href="#projects" onClick={handleNavClick} className="block text-white hover:text-cyan-400 transition duration-300">Projects</a>
          <a href="#contact" onClick={handleNavClick} className="block text-white hover:text-cyan-400 transition duration-300">Contact</a>
        </div>
      )}
    </header>
  );
}