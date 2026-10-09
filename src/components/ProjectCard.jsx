/*
Usage:
<ProjectCard project={project} />
*/

export default function ProjectCard({ project }) {
return (
<article className="project-card">
<div className="project-card-inner">
{project.image && (
<img
src={project.image}
alt={project.title}
className="project-image"
loading="lazy"
/>
)}
<div className="flex-1">
<header className="project-header">
<h3>{project.title}</h3>
<p>{project.period} <span>·</span> {project.tagline}</p>
</header>

<ul className="project-highlights">
{project.highlights?.map((h, i) => (
<li key={i}>{h}</li>
))}
</ul>

{project.tech?.length > 0 && (
<div className="tech-list">
{project.tech.map((t) => (
<span
key={t}
className="tech-tag"
>
{t}
</span>
))}
</div>
)}

<div className="project-links">
{project.links?.demo && (
<a
href={project.links.demo}
target="_blank"
rel="noopener noreferrer"
className="text-link"
>
Live Demo
</a>
)}
{project.links?.repo && (
<a
href={project.links.repo}
target="_blank"
rel="noopener noreferrer"
className="text-link muted-link"
>
GitHub
</a>
)}
</div>
</div>
</div>
</article>
);
}