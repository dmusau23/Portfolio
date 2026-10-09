import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-heading">
        <span className="section-number">06</span>
        <h2>Open channel</h2>
      </div>

      <p className="section-intro">
        Have a project, opportunity, or technical question? I’d be glad to connect.
      </p>

      <form action="https://formsubmit.co/danielmaxniel@gmail.com" method="POST" className="contact-form">
        <input type="hidden" name="_captcha" value="false" />
        <input type="email" name="email" placeholder="Your Email" required className="form-control" />
        <input type="text" name="subject" placeholder="Subject" required className="form-control" />
        <textarea name="message" rows="4" placeholder="Your Message" required className="form-control" />
        <button type="submit" className="button button-primary form-submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
