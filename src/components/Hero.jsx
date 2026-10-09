export default function Hero() {
return (
<section id="home" className="hero-section">
<div className="hero-grid" />
<div className="hero-content">
<p className="eyebrow"><span>01</span> // software engineer</p>
<h1>Building systems<br /><em>that hold up.</em></h1>
<p className="hero-copy">I design reliable backend services and focused interfaces with Java, Spring Boot, React, and a bias for measurable outcomes.</p>
<div className="hero-actions">
<a href="#projects" className="button button-primary">Explore the work <span>↓</span></a>
<a href="mailto:danielmaxniel@gmail.com" className="button button-quiet">Start a conversation <span>↗</span></a>
</div>
<p className="hero-status"><i /> Available for software engineering opportunities <span>Atlanta, GA · EST</span></p>
</div>
<div className="hero-code" aria-hidden="true"><span>01</span><span>02</span><span>03</span><span>04</span><code>const <b>craft</b> = reliability<br />  + clarity<br />  + curiosity;</code></div>
</section>
);
}