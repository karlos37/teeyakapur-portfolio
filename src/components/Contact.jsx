import React, {useState} from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create mailto link with form data
        const subject = encodeURIComponent(`Contact from ${formData.name}`);
        const body = encodeURIComponent(`Hi Teeya,\n\n${formData.message}`);

        // Open default email client
        window.location.href = `mailto:teeya.kapur@utdallas.edu?subject=${subject}&body=${body}`;

        // Reset form
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

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
                  <a href="mailto:teeya.kapur@utdallas.edu" className="contact-link">
                      teeya.kapur@utdallas.edu
                  </a>
              </div>
                <div className="contact-item">
                    <strong>Phone:</strong>
                    <a href="tel:6825214437" className="contact-link">
                        682.521.4437
                    </a>
                </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                  <a href="https://linkedin.com/in/teeyakapur" target="_blank" rel="noopener noreferrer"
                     className="contact-link">
                  linkedin.com/in/teeyakapur
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                  />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                  />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                  <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                  ></textarea>
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
