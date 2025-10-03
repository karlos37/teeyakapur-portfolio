import React, { useState } from 'react';

const Resume = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleOverlayToggle = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h2>Resume</h2>
        <div className="resume-content">
          <div className="resume-preview">
            <div className="resume-container">
              <div className="pdf-default-preview">
                <iframe
                  src="/teeyakapur-portfolio/Teeya Kapur - PPA Resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
                  title="Teeya Kapur Resume"
                  className="pdf-iframe-default"
                />
                <div className="preview-overlay" onClick={handleOverlayToggle}>
                  <div className="overlay-content">
                    <div className="overlay-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                      </svg>
                    </div>
                    <p>Click to expand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-actions">
            <button 
              onClick={handleOverlayToggle}
              className="btn btn-primary"
            >
              {showOverlay ? 'Close Full View' : 'Full Screen View'}
            </button>
            <a 
              href="/teeyakapur-portfolio/Teeya Kapur - PPA Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Open in New Tab
            </a>
            <a 
              href="/teeyakapur-portfolio/Teeya Kapur - PPA Resume.pdf" 
              download="Teeya_Kapur_Resume.pdf"
              className="btn btn-download"
            >
              Download PDF
            </a>
          </div>
        </div>
        
        {/* Full Screen Overlay */}
        {showOverlay && (
          <div className="pdf-overlay" onClick={handleOverlayToggle}>
            <div className="pdf-overlay-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="close-overlay-btn"
                onClick={handleOverlayToggle}
                aria-label="Close full screen view"
              >
                ✕
              </button>
              <iframe
                src="/teeyakapur-portfolio/Teeya Kapur - PPA Resume.pdf#toolbar=1&navpanes=1&scrollbar=1"
                title="Teeya Kapur Resume - Full View"
                className="pdf-iframe-overlay"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
