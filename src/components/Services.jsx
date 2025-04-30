import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ourproduct.css";
// Import images directly

import ServiceImage from "../assets/images/serviceImg.png"
// import Telemedicine from "../assets/images/Telemedicine.png"
import Frame from "../assets/images/Frame.png"
const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="our-product">
      <h2>Our Products & Services</h2>
      <p>
        Explore the powerful features that make Carenet a trusted healthcare
        platform.
      </p>
      <div>
        <img src={ServiceImage} alt=""/>
      </div>  
      <div className="services-1">
        {/* Heading */}
        <h2>Services</h2>
        {/* Container */}
        <div className="service">
         <div className="serv">
          {/* Telemedicine Image */}
          <div className="telemed-image">
          <img src={Frame}/>
          </div>
          {/* Text-Content */}
          <h2>Telemedicine Services</h2>
         </div>
        </div>
      </div>

      <button onClick={() => navigate("/")} className="back-home-btn">
        ← Back to Home
      </button>
    </section>
  );
};

export default Services;
