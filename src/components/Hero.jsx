import React from "react";
import "../assets/css/hero.css";
import Himage from "../assets/images/care hero.jpg";

const Hero = () => {
  return (
    <div className="hero-section">
      {/* Left Content */}
      <div className="hero-content">
        <h1>
          Connect.
          <br />
          Collaborate. Care.
        </h1>
        <p>
          Your hub for medical professionals
          <br />
          to chat, learn and lead
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn-red">
            Bring me in! <span className="arrow">→</span>
          </button>
          <button className="btn-outline-red">Download our app</button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img src={Himage}alt="Medical Professional" />
      </div>
    </div>
  );
};

export default Hero;
