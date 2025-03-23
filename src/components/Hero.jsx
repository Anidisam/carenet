import React from "react";
import "../assets/css/hero.css";
import HeroImage from "../assets/images/hero gangan.svg";
import Arrow from "../assets/images/arrow-c.svg"

const Hero = () => {
  return (
    <div className="hero-section" >
      {/* Left Content */}
      <div className="hero-content">
        <div>
          <h1>
            Connect. Collaborate. Care.
          </h1>
          <p>
            Your hub for medical professionals to chat, learn and lead
          </p>
        </div>
        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn-red">
            Learn more <img src ={Arrow}/>
          </button>
          <button className="btn-outline-red">Download our app </button>
        </div>
        {/* Right Image */}

      </div>

        <div className="hero-image"> 
        <img src={HeroImage} alt="Medical Professional"  />
      </div>
      
    </div>

  );
};

export default Hero;

