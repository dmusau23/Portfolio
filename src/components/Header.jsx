export default function Header({ isMenuOpen, setIsMenuOpen, handleNavClick, isLightMode, setIsLightMode }) {
  return (
    <header className="site-header">
      <nav className="nav-wrap" aria-label="Primary navigation">
        <a href="#home" className="brand" onClick={handleNavClick} aria-label="Daniel Musau home">
          <span className="brand-mark">DM</span>
          <span className="brand-label">Daniel Musau <b>/</b> portfolio</span>
        </a>

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
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#skills" onClick={handleNavClick}>Stack</a>
          <a href="#projects" onClick={handleNavClick}>Work</a>
          <a href="https://github.com/dmusau23" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:danielmaxniel@gmail.com" className="nav-resume" onClick={handleNavClick}>
            Contact <span aria-hidden="true">↗</span>
          </a>
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
      </nav>
    </header>
  );
}
