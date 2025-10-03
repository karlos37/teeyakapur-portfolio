import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am a dedicated Public Policy Analyst with a passion for research, data analysis, 
              and evidence-based policy making. My work focuses on understanding complex social 
              issues and developing innovative solutions that can make a meaningful impact on society.
            </p>
            <p>
              With expertise in policy research, data analysis, and stakeholder engagement, 
              I am committed to bridging the gap between research and practical policy implementation. 
              I believe in the power of data-driven decision making and collaborative approaches 
              to address contemporary challenges.
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
                src="src/assets/1750900686263.jpeg"
                alt="Teeya Kapur - Public Policy Analyst" 
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
