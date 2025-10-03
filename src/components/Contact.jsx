import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
                I'm always interested in discussing accounting opportunities,
                internships, or collaborative projects in finance and business analytics.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                  <a href="mailto:txk220044@utdallas.edu">txk220044@utdallas.edu</a>
              </div>
                <div className="contact-item">
                    <strong>Phone:</strong>
                    <a href="tel:6825214437">682.521.4437</a>
                </div>
                <div className="contact-item">
                    <strong>Location:</strong>
                    <span>Richardson, Texas</span>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                <a href="https://linkedin.com/in/teeyakapur" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/teeyakapur
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
