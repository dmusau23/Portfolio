export default function Resume() {
  return (
    <section id="resume" className="content-section resume-section">
      <div className="resume-panel">
        <div>
            <p className="eyebrow"><span>05</span> // résumé</p>
            <h2>Let the work<br /><em>speak clearly.</em></h2>
            <p className="resume-copy">
              Download my résumé to see project details, technical skills, and the real outcomes I delivered in Java, Spring Boot, React, and database systems.
            </p>
        </div>
          <div className="resume-actions">
            <a
              href="/Daniel-Musau-Resume.pdf"
              download
              className="button button-primary"
            >
              Download Résumé
            </a>
            <a
              href="mailto:danielmaxniel@gmail.com"
              className="button button-quiet"
            >
              Email me
            </a>
          </div>
      </div>
    </section>
  );
}
