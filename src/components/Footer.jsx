export default function Footer({ content }) {
  return (
    <footer className="site-footer">
      <p className="footer-socials">
        <a
          href="https://github.com/dmusau23"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <svg
            className="footer-social-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.77 2.39 3.94 1.67.1-.72.39-1.21.7-1.49-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.16a10.7 10.7 0 0 1 5.6 0c2.13-1.46 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z"
            />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-musau23/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <svg
            className="footer-social-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 10H5.67v8h2.67v-8ZM7 6.33a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1ZM18.33 13.42c0-2.4-1.28-3.52-2.99-3.52a2.59 2.59 0 0 0-2.33 1.28V10h-2.67v8h2.67v-4.38c0-1.16.22-2.29 1.67-2.29 1.43 0 1.45 1.34 1.45 2.37V18h2.67l-.47-4.58Z"
            />
          </svg>
          LinkedIn
        </a>
      </p>
      <p className="footer-note">{content.footer.built}</p>
    </footer>
  );
}
