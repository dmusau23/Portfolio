export default function Header({
  isMenuOpen,
  setIsMenuOpen,
  handleNavClick,
  isLightMode,
  setIsLightMode,
  locale,
  setLocale,
  content,
}) {
  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a href="#home" className="brand" onClick={handleNavClick} aria-label="Daniel Musau home">
          <span className="brand-mark">DM</span>
          <span className="brand-label">
            Daniel Musau <b>/</b> portfolio
          </span>
        </a>

        <div className="nav-actions">
          <div className="language-switcher" aria-label={content.common.language} role="tablist">
            <button
              type="button"
              className={locale === 'en' ? 'is-active' : ''}
              onClick={() => setLocale('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              className={locale === 'fr' ? 'is-active' : ''}
              onClick={() => setLocale('fr')}
              aria-label="Passer en français"
            >
              FR
            </button>
          </div>

          <button
            className="theme-toggle"
            type="button"
            onClick={() => setIsLightMode(!isLightMode)}
            aria-label={`Switch to ${isLightMode ? 'dark' : 'light'} mode`}
            title={`Switch to ${isLightMode ? 'dark' : 'light'} mode`}
          >
            <span aria-hidden="true">{isLightMode ? '☾' : '☼'}</span>
          </button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="primary-links"
        >
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div id="primary-links" className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          <a href="#about" onClick={handleNavClick}>{content.nav.about}</a>
          <a href="#skills" onClick={handleNavClick}>{content.nav.stack}</a>
          <a href="#projects" onClick={handleNavClick}>{content.nav.work}</a>
          <a href="https://github.com/dmusau23" target="_blank" rel="noopener noreferrer">
            {content.nav.github}
          </a>
          <a href="mailto:danielmaxniel@gmail.com" className="nav-resume" onClick={handleNavClick}>
            {content.nav.contact} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}


