import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/css/aboutus.css";

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div className="about-us-container">
      <h2>About Carenet</h2>
      <p>
        Carenet is a platform dedicated to connecting healthcare professionals
        worldwide. Our mission is to provide top-quality medical resources,
        networking opportunities, and expert insights to improve patient care.
      </p>
      <p>
        Whether you're a doctor, nurse, or medical student, Carenet offers
        essential tools to enhance your career and knowledge.
      </p>

      {/* Button to go back to Home */}
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "10px",
          background: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default AboutUs;
