import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/contactus.css";

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Have any questions? Get in touch with us!</p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong> officialcarenet@yahoo.com
          </p>
          <p>
            <strong>Phone:</strong> +234 904 799 4270
          </p>
          <p>
            <strong>Address:</strong> 5 irepodun St, Lagos State, Nigeria
          </p>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="#" target="_blank" className="social-icon">
              🔵 Facebook
            </a>
            <a href="#" target="_blank" className="social-icon">
              🔷 Twitter
            </a>
            <a href="#" target="_blank" className="social-icon">
              🔗 LinkedIn
            </a>
          </div>

          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093895!2d144.95373631531592!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1c3f1f57a4b!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1630213045321!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <button onClick={() => navigate("/")} className="back-home-btn">
        ← Back to Home
      </button>
    </section>
  );
};

export default ContactUs;
