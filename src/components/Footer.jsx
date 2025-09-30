import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Teeya Kapur</h3>
            <p>Public Policy Analyst & Researcher</p>
          </div>
          <div className="footer-links">
            <a href="https://linkedin.com/in/teeyakapur" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:teeya.kapur@example.com">Email</a>
            <a href="/Teeya Kapur - PPA Resume.pdf" download>Resume</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Teeya Kapur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
