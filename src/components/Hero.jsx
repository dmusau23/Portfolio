import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Daniel 👋🏾";
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Vanta.js NET background
  useEffect(() => {
    if (!vantaEffect && typeof window !== "undefined") {
      import('vanta/dist/vanta.net.min').then((VANTA) => {
        const effect = VANTA.default({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x8494eb, // Tailwind cyan-400
          backgroundColor: 0x0f172a, // Tailwind gray-900
          points: 19.0,
          maxDistance: 21.0,
          spacing: 16.0,
          showDots: true,
        });
        setVantaEffect(effect);
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section ref={vantaRef} className="relative text-center py-24 overflow-hidden text-white">
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in text-cyan-400">
          {typedText}
          <span className="animate-pulse inline-block w-0.5 h-6 bg-white ml-1 align-middle"></span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto animate-fade-in delay-100">
          A passionate Software Developer focused on building full-stack web applications with React, Spring Boot, and MySQL.
        </p>

        <div className="mt-6">
          <a
            href="#projects"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
