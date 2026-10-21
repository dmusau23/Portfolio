export default function Resume({ content }) {
  const { resume } = content;

  return (
    <section id="resume" className="content-section resume-section">
      <div className="resume-panel">
        <div>
          <p className="eyebrow">
            <span>05</span> // {resume.eyebrow}
          </p>
          <h2 className="resume-title">{resume.heading}</h2>
          <p className="resume-copy">{resume.copy}</p>
        </div>

        <div className="resume-actions">
          <a href="https://github.com/dmusau23" target="_blank" rel="noreferrer" className="button button-primary">
            {resume.github}
          </a>
          <a href="mailto:danielmaxniel@gmail.com" className="button button-quiet">
            {resume.email}
          </a>
        </div>
      </div>
    </section>
  );
}


