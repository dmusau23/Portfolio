export default function Contact({ content }) {
  const { contact } = content;

  return (
    <section id="contact" className="content-section contact-section">
      <div className="section-heading">
        <span className="section-number">06</span>
        <h2>{contact.section}</h2>
      </div>

      <p className="section-intro">{contact.intro}</p>

      <form action="https://formsubmit.co/danielmaxniel@gmail.com" method="POST" className="contact-form">
        <input type="hidden" name="_captcha" value="false" />
        <input type="email" name="email" placeholder={contact.email} required className="form-control" />
        <input type="text" name="subject" placeholder={contact.subject} required className="form-control" />
        <textarea name="message" rows="4" placeholder={contact.message} required className="form-control" />
        <button type="submit" className="button button-primary form-submit">
          {contact.send}
        </button>
      </form>
    </section>
  );
}


