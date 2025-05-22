import './Contact.css';

const Contact = () => {
  return (
   <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2>Contact Us</h2>
          <p className="contact-subtitle">Ready to transform your business? Get in touch with us today!</p>

          <div className="contact-grid">
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form className="form-container">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" />
                </div>
                <div className="form-group">
                  <select defaultValue="">
                    <option value="" disabled>Select Service</option>
                    <option value="web">Web Development</option>
                    <option value="erp">ERP Solutions</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="pos">POS Solutions</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>

            <div className="contact-details">
              <h3>Get in Touch</h3>
              <div className="contact-info">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h4>Visit Us</h4>
                    <p>K4 , plotno.406 Kalinga Vihar</p>
                    <p>Bhubaneswar , Near Ekamra Residency , Odisha ,7510191</p>
                    <p>India</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone-alt"></i>
                  <div>
                    <h4>Call Us</h4>
                    <p>Main: +91 9438390207</p>
                    <p>Support:+91 8117076065</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h4>Email Us</h4>
                    <p>info@dmpssolutions.com</p>
                    <p>support@dmpssolutions.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;
