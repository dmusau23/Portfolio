import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
return (
<section id="projects" className="content-section projects-section">
<header className="section-heading"><span className="section-number">04</span><h2>Selected work</h2></header>
<p className="section-intro">A small record of systems built, shipped, and made easier to trust.</p>

<div className="projects-grid">
{projects.map((p) => (
<ProjectCard key={p.title} project={p} />
))}
</div>
</section>
);
}