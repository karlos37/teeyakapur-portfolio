import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-brand">
          <h1>Teeya Kapur</h1>
            <p>Accounting Student & Financial Professional</p>
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
            <li><a href="#organizations">Organizations</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
