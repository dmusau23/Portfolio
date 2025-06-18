import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Daniel Musau";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-center py-20 bg-gradient-to-b from-gray-950 to-gray-900 transition-colors duration-500">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
        {typedText}
        <span className="animate-pulse inline-block w-0.5 h-6 bg-white ml-1 align-middle"></span>
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto animate-fade-in delay-100">
        A passionate Software Developer focused on building full-stack web applications with React, Spring Boot, and MySQL.
      </p>
      <div className="mt-6">
        <a href="#projects" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 transform hover:scale-105">View My Work</a>
      </div>
    </section>
  );
}
