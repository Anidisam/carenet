import React from "react";
import "../assets/css/download.css";
import playstore from "../assets/images/playstore.svg";
import Ios from "../assets/images/applestore.svg";
import backgroundImage from "../assets/images/background.svg"; // Import image

const Download = () => {
  return (
    <div
      className="download-app-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h3>Download Our App</h3>
      <h5>
        Get access to all our features. Start <br />
        interacting with over 500 medical <br />
        professionals
      </h5>

      <div className="download-buttons">
        <button className="download-btn">
          <span>Android</span>
          <img src={playstore} alt="playstore" />
        </button>

        <button className="download-btn2">
          <span>Ios</span>
          <img src={Ios} alt="Apple Store" />
        </button>
      </div>
    </div>
  );
};

export default Download;
