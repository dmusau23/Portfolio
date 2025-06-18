import React from 'react';

export default function Projects() {
    const projects = [
  {
    title: "SmartCrowd",
    description:
      "A real-time smart event management system with ticketing, check-ins, and crowd alerts. Built with React, Spring Boot, and MySQL.",
  },
  {
    title: "Personal Website",
    description:
      "My own portfolio built with React and Tailwindcss. Hosted on a custom domain.",
  },
  {
    title: "Hackathon Projects",
    description:
      "Fast-built prototypes created at various hackathons, including a stadium check-in app and a team collaboration dashboard.",
  },
];
  return (
    <section id="projects" className="py-20 px-4 bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-cyan-400 mb-10 animate-fade-in">Projects</h3>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h4 className="text-xl font-semibold text-white">{project.title}</h4>
              <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
