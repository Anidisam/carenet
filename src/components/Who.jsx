import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../assets/css/aboutus.css";

const Who = () => {
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

      <p>
        Introducing CareNet: Revolutionizing Healthcare with Virtual Sessions In
        today's fast-paced world, finding time to visit a doctor or health
        professional can be challenging. Long waiting lines, busy schedules, and
        geographical constraints can hinder access to quality healthcare. That's
        where HealthConnect comes in – a groundbreaking health app designed to
        bridge the gap between users and health professionals. How it Works
        CareNet is an innovative platform that connects users with a network of
        licensed health professionals, including doctors, therapists,
        nutritionists, and more. With a user-friendly interface, individuals
        can: - Browse profiles and reviews of health professionals - Book
        virtual sessions at a time that suits them - Conduct secure and
        confidential video consultations - Access personalized advice, guidance,
        and treatment plans. Benefits of CareNet 1. Convenience: Access
        healthcare services from anywhere, at any time. 2. Increased
        accessibility: Connect with health professionals from diverse
        specialties and locations. 3. Cost-effective: Reduce healthcare costs by
        minimizing travel and waiting times. 4. Personalized care: Receive
        tailored advice and treatment plans from experienced professionals.
        Features and Security CareNet prioritizes user security and
        confidentiality: - HIPAA-compliant: Ensures the protection of sensitive
        health information. - End-to-end encryption: Safeguards video
        consultations and data transmission. - Verified professionals: Rigorous
        screening and verification process for all health professionals.
        Download CareNet Today! Experience the future of healthcare with
        CareNet. Download the app now and take the first step towards a
        healthier, happier you! Available on: - App Store (iOS) - Google Play
        Store (Android) Join the CareNet community and start connecting with
        health professionals today!
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

export default Who;
