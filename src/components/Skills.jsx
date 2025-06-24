import { useEffect, useState } from "react";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "HTML/CSS/JS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
        {
            name: "Tailwind CSS",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
            name: "Saas",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
        },
        {
        name:"Svelte",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg",
      },
        {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name:"PHP",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      }
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Git & GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
        {
            name: "Postman",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
       {
        name:"VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
       {
        name:"GitLab",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
       },
       {
        name:"Linux/Bash",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },
];

const Skills = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">Skills</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12 rounded-full blur-sm" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gIndex) => (
            <div
              key={gIndex}
              className={`bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/30 transition-transform transform hover:-translate-y-1 ${
                fadeIn
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${gIndex * 150}ms` }}
            >
              <h3 className="text-xl font-semibold text-white mb-6">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-6 justify-items-center">
                {group.skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 mb-2 drop-shadow-lg"
                    />
                    <p className="text-gray-400 text-sm font-medium text-center">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
