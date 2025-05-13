import React from "react";
import "../assets/css/features.css";

// Replace these with your actual images/icons
import sideImage from "../assets/images/side bar.svg";
import icon1 from "../assets/images/ic1.svg";
import icon2 from "../assets/images/ic3.svg";
import icon3 from "../assets/images/ic3.svg";
import finalIcon from "../assets/images/ic4.svg";

const Features = () => {
  return (
    <div className="features-section">
      {/* Mobile Image (hidden on desktop) */}
      <img
        src={sideImage}
        alt="Feature Mobile"
        className="features-image-mobile"
      />

      <h1 className="features-heading">Features and Security</h1>
      <p className="features-description">
        Discover how CareNet keeps your data safe while providing powerful
        features.
      </p>

      <div className="features-content">
        {/* Desktop Image (hidden on mobile) */}
        <img src={sideImage} alt="Feature" className="features-image" />

        <div className="features-details">
          <div className="features-row">
            <div className="feature-box">
              <img src={icon1} alt="Icon 1" className="feature-icon" />
              <h4>Fast Access</h4>
              <p>
                Quickly connect with healthcare professionals anytime, anywhere.
              </p>
            </div>
            <div className="feature-box">
              <img src={icon2} alt="Icon 2" className="feature-icon" />
              <h4>Secure Data</h4>
              <p>All your medical records are encrypted and safe with us.</p>
            </div>
            <div className="feature-box">
              <img src={icon3} alt="Icon 3" className="feature-icon" />
              <h4>24/7 Support</h4>
              <p>Our team is always ready to help with any issues you face.</p>
            </div>
          </div>

          <div className="features-footer">
            <div className="footer-top">
              <img src={finalIcon} alt="Final Icon" className="footer-icon" />
              <button className="footer-button">Download App</button>
            </div>
            <p className="footer-description">
              Explore in-depth how we keep your health information private and
              protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
