import React from 'react';
import headshotImage from '../assets/1750900686263.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
                I am a dedicated accounting student at The University of Texas at Dallas, pursuing a Bachelor of Science
                in Accounting with a 3.91 GPA and working towards my Master of Science in Accounting and Analytics.
                As a Texas CPA candidate, I am passionate about financial analysis, audit processes, and ensuring
                accuracy in financial reporting.
            </p>
            <p>
                Currently serving as a Student Assistant at UT Dallas Central Business Office, I have gained hands-on
                experience in financial auditing, procurement processes, and expense management. My expertise includes
                QuickBooks Online ProAdvisor Certification, Advanced MS Excel, and Microsoft Dynamics GP. I am committed
                to maintaining the highest standards of financial integrity and contributing to organizational success
                through meticulous attention to detail and analytical thinking.
            </p>
            <div className="about-links">
              <a href="https://linkedin.com/in/teeyakapur" target="_blank" rel="noopener noreferrer" className="linkedin-link">
                View LinkedIn Profile
              </a>
            </div>
          </div>
          <div className="about-image">
            <div className="headshot-container">
              <img 
                src={headshotImage}
                alt="Teeya Kapur - Accounting Student & Financial Professional" 
                className="headshot-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
