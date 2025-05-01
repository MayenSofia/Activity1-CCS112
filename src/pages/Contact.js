import React from 'react';

function Contact() {
  return (
    <section className="section">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Feel free to reach out to me</p>
      
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="contact-card">
            <div className="contact-info">
              <span className="contact-icon">📧</span>
              <div>
                <h5>Email</h5>
                <p>mendozamayensofia31@gmail.com</p>
              </div>
            </div>
            
            <div className="contact-info">
              <span className="contact-icon">📱</span>
              <div>
                <h5>Phone</h5>
                <p>0905 826 2668</p>
              </div>
            </div>
            
            <div className="contact-info">
              <span className="contact-icon">📍</span>
              <div>
                <h5>Address</h5>
                <p>B 131 L 16 PH.2 Mabuhay City, Mamatid, Cabuyao, Laguna</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/MayenSofia" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/mayen-mendoza-8aa289233" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;