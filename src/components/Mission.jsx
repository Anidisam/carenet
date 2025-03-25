import React from "react";
import "../assets/css/mission.css";

// Import Partner Logos
import Partner1 from "../assets/images/coliquio.svg";
import Partner2 from "../assets/images/frontline.svg";
import Partner3 from "../assets/images/guideline.svg";
import Partner4 from "../assets/images/jim.svg";
import Partner5 from "../assets/images/madede.svg";
import Partner6 from "../assets/images/medquality.svg";
import Partner7 from "../assets/images/medsims.svg";
import Partner8 from "../assets/images/medspace.svg";
import Partner9 from "../assets/images/qxmd.svg";
import Partner10 from "../assets/images/saned.svg";
import Partner11 from "../assets/images/univadis.svg";
import Partner12 from "../assets/images/webmd.svg";

const partnerImages = [
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
  Partner6,
  Partner7,
  Partner8,
  Partner9,
  Partner10,
  Partner11,
  Partner12,
];

const Mission = () => {
  return (
    <div className="mission-section">
      {/* OUR MISSION */}
      <div className="text-center section">
        <h2 className="fw-bold">Our Mission</h2>
        <p className="text-muted">
          Our mission is to improve patient care by providing comprehensive
          clinical information and resources essential to physicians and
          healthcare professionals.
        </p>
      </div>

      {/* Space */}
      <div className="spacer"></div>

      {/* WHO WE ARE */}
      <div className="text-center section">
        <h2 className="fw-bold">Who We Are</h2>
        <p className="text-muted">
          Medscape is the leading online global destination for physicians and
          healthcare professionals worldwide, offering the latest medical news
          and expert perspectives; essential point-of-care drug and disease
          information; and relevant professional education and CME. Medscape
          membership is free and gives you unlimited access to the entire
          network of sites and services.
        </p>
      </div>

      {/* Space */}
      <div className="spacer"></div>

      {/* OUR NETWORK OF PARTNERS */}
      <div className="text-center section">
        <h2 className="fw-bold">Our Network of Partners</h2>
        <div className="partners-grid">
          {partnerImages.map((image, index) => (
            <div className="partner" key={index}>
              <img
                src={image}
                alt={`Partner ${index + 1}`}
                className="partner-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission;
