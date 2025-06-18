import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-center transition-colors duration-500">
      <h3 className="text-3xl font-bold text-cyan-400 mb-4 animate-fade-in">Get in Touch</h3>
      <p className="text-gray-300 text-lg mb-6 animate-fade-in delay-100">Let's build something great together. Reach out to collaborate, hire, or just say hi.</p>

      <form action="https://formsubmit.co/danielmaxniel@gmail.com" method="POST" className="max-w-xl mx-auto space-y-4 animate-fade-in delay-200">
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300"
        ></textarea>
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300 transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
