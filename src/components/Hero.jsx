export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" />

      <div className="hero-content">
        <p className="eyebrow">
          <span>01</span> // software engineer
        </p>

        <h1>
          Daniel Musau<br />
          <em>Building software with purpose.</em>
        </h1>

        <p className="hero-copy">
          I design practical web applications and backend systems using Java, Spring Boot,
          React, TypeScript, and a strong focus on clean, maintainable engineering.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Explore my work <span>↓</span>
          </a>
          <a href="mailto:danielmaxniel@gmail.com" className="button button-quiet">
            Start a conversation <span>↗</span>
          </a>
        </div>

        <p className="hero-status">
          <i /> Open to software engineering opportunities
          <span>Atlanta, GA · EST</span>
        </p>
      </div>

      <div className="hero-code" aria-hidden="true">
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
        <code>
          const <b>build</b> = clarity<br />
          + reliability<br />
          + curiosity;
        </code>
      </div>
    </section>
  );
}
