import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-4 animate-fade-in">About Me</h3>
        <p className="text-gray-300 text-lg animate-fade-in delay-100">
          I'm a junior Software Development student with hands-on experience in React, Java, Spring Boot, and MySQL. I love building meaningful, user-centered apps. Currently working on a smart event management system called <span className="text-cyan-400 font-semibold">SmartCrowd</span>.
        </p>
      </div>
    </section>
  );
}
