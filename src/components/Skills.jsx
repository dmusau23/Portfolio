export default function About({ content }) {
  const { about } = content;

  return (
    <section id="about" className="content-section about-section">
      <div className="section-heading">
        <span className="section-number">02</span>
        <h2>{about.section}</h2>
      </div>

      <div className="about-layout">
        <p className="about-lead">{about.lead}</p>

        <div className="about-copy">
          <p>{about.intro}</p>
          <p>{about.detailOne}</p>
          <p>{about.detailTwo}</p>
        </div>
      </div>
    </section>
  );
}


