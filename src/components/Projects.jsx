import React from 'react';
import { github } from './Footer';

export default function Projects() {
    const web =<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"/><path stroke-linecap="round" stroke-linejoin="round" d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"/><path d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z" clip-rule="evenodd"/></g></svg>;
    const projects = [
  {
    title: "SmartCrowd",
    description:
      "A real-time smart event management system with ticketing, check-ins, and crowd alerts. Built with React, Spring Boot, and MySQL.",
  },
  {
    title: "Personal Website",
    description:
      "My own portfolio built with React and Tailwindcss. Hosted on Netlify.",
      demo:"https://danielmusau23.netlify.app/",
      git:"https://github.com/dmusau23/Portfolio",
  },
  {
    title: "Weather App",
    description:
      "A simple weather application that fetches real-time weather data using the OpenWeatherMap API. Built with Html and CSS.",
    demo: "https://dmusau23.github.io/Weather-App/",
    git: "https://github.com/dmusau23/Weather-App",
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
              {/* <div className="mt-4 flex flex-row items-center space-x-4 justify-center">
            <a  href={project.git} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline mt-4 inline-block">
                        View Project
                    </a>
                    <a  href={project.demo} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline mt-4 inline-block">
                        View Project
                    </a>
                </div>
            </div> */}
            <div className="flex-grow"></div>

      <div className="mt-4 flex flex-row items-center space-x-4 justify-center text-2xl hover:text-white">
        <a
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white inline-block"
        >
          {github}
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white inline-block"
        >
          {web}
        </a>
      </div>
    </div>
          ))}
        </div>
      </div>
    </section>
  );
}
