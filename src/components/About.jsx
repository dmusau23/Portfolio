import React from 'react';

export default function About() {
  return (
    <section id="about" className="content-section about-section">
      <div className="section-heading">
        <span className="section-number">02</span>
        <h2>About me</h2>
      </div>

      <div className="about-layout">
        <p className="about-lead">
          I build practical software that is useful, clear, and easy to trust.
        </p>

        <div className="about-copy">
          <p>
            I’m a software development student with experience in Java, Spring Boot, React,
            TypeScript, and database-driven applications. I enjoy turning ideas into working
            solutions and learning the parts of software that make products reliable for real users.
          </p>
          <p>
            My work spans frontend projects, backend security concepts, collaborative team builds,
            and coursework that strengthens my engineering habits. I care about clean code,
            readable design, and creating tools that feel straightforward to use.
          </p>
          <p>
            I’m especially interested in full-stack development, product-focused engineering,
            and opportunities where I can keep learning while contributing to meaningful work.
          </p>
        </div>
      </div>
    </section>
  );
}
