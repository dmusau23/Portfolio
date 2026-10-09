import React from 'react';

export default function About() {
  return (
    <section id="about" className="content-section about-section">
      <div className="section-heading"><span className="section-number">02</span><h2>How I work</h2></div>
      <div className="about-layout">
        <p className="about-lead">Software should feel inevitable: clear to use, considered under pressure, and easy for the next engineer to understand.</p>
        <div className="about-copy">
          <p>I'm a software development student with hands-on experience across React, Java, Spring Boot, and MySQL. I build backend APIs and real-time interfaces that reduce duplicate data and make operations easier for users.</p>
          <p>Right now, I'm developing <strong>SmartCrowd</strong>, an event management system with live check-in, role-based access, and data-driven dashboards.</p>
        </div>
      </div>
    </section>
  );
}
