import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2>Resume</h2>
        <div className="resume-content">
          <div className="resume-preview">
            <div className="resume-image">
              <div className="resume-placeholder">
                <p>Resume Preview</p>
                <small>Click to view full resume</small>
              </div>
            </div>
          </div>
          <div className="resume-actions">
            <a 
              href="/Teeya Kapur - PPA Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View Full Resume
            </a>
            <a 
              href="/Teeya Kapur - PPA Resume.pdf" 
              download="Teeya_Kapur_Resume.pdf"
              className="btn btn-secondary"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
