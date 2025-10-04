import React, {useState} from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* Mobile Hamburger Menu Button - Only visible on mobile, positioned on left */}
        <button
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            style={{
              display: window.innerWidth <= 768 ? 'flex' : 'none',
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: '30px',
              height: '30px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              zIndex: 1001,
              order: 1
            }}
        >
          <span style={{
            width: '100%',
            height: '3px',
            background: '#e8e8e8',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transformOrigin: 'center',
            transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
          }}></span>
          <span style={{
            width: '100%',
            height: '3px',
            background: '#e8e8e8',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? 0 : 1
          }}></span>
          <span style={{
            width: '100%',
            height: '3px',
            background: '#e8e8e8',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transformOrigin: 'center',
            transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
          }}></span>
        </button>

        <div className="nav-brand" style={{order: 2}}>
          <h1>Teeya Kapur</h1>
          <p>Accounting Student & Financial Professional</p>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav" style={{order: 3}}>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#organizations">Organizations</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Slide-out Navigation - Only visible on mobile */}
      <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 999,
            display: window.innerWidth <= 768 ? 'block' : 'none',
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease, visibility 0.3s ease'
          }}
          onClick={closeMenu}
      >
        <div
            style={{
              position: 'fixed',
              top: 0,
              left: isMenuOpen ? '0' : '-280px',
              width: '280px',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.98)',
              backdropFilter: 'blur(20px)',
              padding: '2rem 1rem',
              zIndex: 1000,
              display: window.innerWidth <= 768 ? 'block' : 'none',
              boxShadow: '2px 0 20px rgba(0, 0, 0, 0.5)',
              transition: 'left 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
        >
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
            <h2 style={{color: '#ffffff', fontSize: '1.3rem', fontWeight: 'bold'}}>Sections</h2>
            <button
                onClick={closeMenu}
                style={{
                  background: 'rgba(74, 158, 255, 0.2)',
                  border: '1px solid rgba(74, 158, 255, 0.4)',
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  cursor: 'pointer'
                }}
            >
              ×
            </button>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <a
                href="#about"
                onClick={closeMenu}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '1.2rem',
                  backgroundColor: '#4a9eff',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  display: 'block',
                  border: '1px solid #4a9eff',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
            >
              About
            </a>
            <a
                href="#education"
                onClick={closeMenu}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '1.2rem',
                  backgroundColor: '#4a9eff',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  display: 'block',
                  border: '1px solid #4a9eff',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
            >
              Education
            </a>
            <a
                href="#experience"
                onClick={closeMenu}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '1.2rem',
                  backgroundColor: '#4a9eff',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  display: 'block',
                  border: '1px solid #4a9eff',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
            >
              Experience
            </a>
            <a
                href="#projects"
                onClick={closeMenu}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '1.2rem',
                  backgroundColor: '#4a9eff',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  display: 'block',
                  border: '1px solid #4a9eff',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
            >
              Projects
            </a>
            <a
                href="#organizations"
                onClick={closeMenu}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '1.2rem',
                  backgroundColor: '#4a9eff',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  display: 'block',
                  border: '1px solid #4a9eff',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
            >
              Organizations
            </a>
            <a
                href="#resume"
                onClick={closeMenu}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '1.2rem',
                  backgroundColor: '#4a9eff',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  display: 'block',
                  border: '1px solid #4a9eff',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
            >
              Resume
            </a>
            <a
                href="#contact"
                onClick={closeMenu}
                style={{
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '1.2rem',
                  backgroundColor: '#4a9eff',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  display: 'block',
                  border: '1px solid #4a9eff',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;