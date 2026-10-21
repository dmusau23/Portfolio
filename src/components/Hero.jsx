export default function Hero({ content }) {
  const { hero } = content;

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" />

      <div className="hero-shell">
        <div className="hero-content">
          <p className="eyebrow">
            <span>01</span> // {hero.eyebrow}
          </p>

          <h1>
            Daniel Musau
            <br />
            <em>{hero.headlineSecondary}</em>
          </h1>

          <p className="hero-copy">{hero.blurb}</p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              {hero.primary} <span>↓</span>
            </a>
            <a href="mailto:danielmaxniel@gmail.com" className="button button-quiet">
              {hero.secondary} <span>↗</span>
            </a>
          </div>

          <p className="hero-status">
            <i /> {hero.status}
            <span>{hero.location}</span>
          </p>
        </div>

        <div className="hero-code" aria-hidden="true">
          <span>01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <code>{hero.code}</code>
        </div>
      </div>
    </section>
  );
}


