import React from "react";
import "../assets/css/benefits.css";

// Replace these with your actual image imports
import mainImg from "../assets/images/benefit hero2.svg";
import icon1 from "../assets/images/benefit 1.svg";
import icon2 from "../assets/images/benefit 1.svg";
import icon3 from "../assets/images/benefit 1.svg";
import icon4 from "../assets/images/benefit 1.svg";

const benefitData = [
  {
    icon: icon1,
    title: "Convenient",
    desc: "Access healthcare services from anywhere, at any time..",
  },
  {
    icon: icon2,
    title: "Increased accessibility",
    desc: "Connect with health professionals from diverse specialties and locations.",
  },
  {
    icon: icon3,
    title: "Cost-effective",
    desc: "Reduce healthcare costs by minimizing travel and waiting times.",
  },
  {
    icon: icon4,
    title: "Personalized care",
    desc: "Receive tailored advice and treatment plans from experienced professionals. ",
  },
];

const Benefits = () => {
  return (
    <div className="benefits-section">
      <h2 className="benefit-title">Benefit of CareNet</h2>
      <img src={mainImg} alt="Main Benefit" className="benefit-main-image" />

      <div className="benefit-grid">
        {benefitData.map((item, index) => (
          <div className="benefit-card" key={index}>
            <img
              src={item.icon}
              alt={`Icon ${index + 1}`}
              className="benefit-icon"
            />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
