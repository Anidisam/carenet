import React from "react";
import "../assets/css/howitworks.css";

import step1 from "../assets/images/aboutcard1.svg";
import step2 from "../assets/images/aboutcard1.svg";
import step3 from "../assets/images/aboutcard1.svg";
import step4 from "../assets/images/aboutcard1.svg";
import step5 from "../assets/images/aboutcard1.svg";

const steps = [step1, step2, step3, step4, step5];

const Howitworks = () => {
  return (
    <div className="how-it-works-wrapper">
      {/* Blue section */}
      <div className="how-it-works-header">
        <h2>How it Works</h2>
        <p>
          CareNet is an innovative platform that connects users with a network
          of licensed health professionals, including doctors, therapists,
          nutritionists, and more.
        </p>
      </div>

      {/* White section with only images */}
      <div className="how-it-works-images">
        {steps.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Step ${index + 1}`}
            className="step-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Howitworks;
