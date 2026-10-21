import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects({ content }) {
  return (
    <section id="projects" className="content-section projects-section">
      <header className="section-heading">
        <span className="section-number">04</span>
        <h2>{content.projects.section}</h2>
      </header>
      <p className="section-intro">{content.projects.intro}</p>

      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} labels={content.projects} />
        ))}
      </div>
    </section>
  );
}


