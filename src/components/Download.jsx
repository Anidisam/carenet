import React from "react";
import "../assets/css/download.css";
import mainImg from "../assets/images/girl phone.svg";
import img1 from "../assets/images/girl phone.svg";
import img2 from "../assets/images/boy dna.svg";
import img3 from "../assets/images/testi 2.svg";
import img4 from "../assets/images/testi 3.svg";

const imageData = [
  {
    img: img1,
    title: "Download our app now",
    description:
      "Get access to all our features. Start ",
  },
  {
    img: img2,
    title: "24/7 Telemedicine",
    description:
      "Doctors are waiting to listen to you. ",
  },
  {
    img: img3,
    title: "Got questions? Want to know",
    description:
      "Get on the timeline, ask questions",
  },
  {
    img: img4,
    title: "Secure system and cutting-edge ",
    description:
      "Our systems are secured to protect you .",
  },
];

const Download = () => {
  return (
    <div className="download-section">
      <h1 className="section-title">Ready to explore? We got you covered</h1>

      <div className="download-container">
        {/* Main Image (Left Side) */}
        <div className="main-image">
          <img src={mainImg} alt="Main App" />
          <div className="image-content">
            <h1>About LAGIS</h1>
            <p>
              Get access to all our features. Start interacting with over 500
              medical professionals.
            </p>
          </div>
        </div>

        {/* Stacked Images (Right Side) */}
        <div className="stacked-images">
          {imageData.map((item, index) => (
            <div key={index} className="stacked-image">
              <img src={item.img} alt={item.title} />
              <div className="image-content">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Download;
