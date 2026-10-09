export default function Resume() {
  return (
    <section id="resume" className="content-section resume-section">
      <div className="resume-panel">
        <div>
          <p className="eyebrow">
            <span>05</span> // profile
          </p>
          <h2>
            Let the work<br />
            <em>speak clearly.</em>
          </h2>
          <p className="resume-copy">
            I’m building a portfolio around practical projects, collaborative work, and hands-on
            front-end and back-end development. If you want to connect, discuss opportunities,
            or talk through a project, I’m open to it.
          </p>
        </div>

        <div className="resume-actions">
          <a href="https://github.com/dmusau23" target="_blank" rel="noreferrer" className="button button-primary">
            View GitHub
          </a>
          <a href="mailto:danielmaxniel@gmail.com" className="button button-quiet">
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
