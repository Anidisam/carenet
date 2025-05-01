import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/ourproduct.css";
// import Testimonials from "./Testimonials";
// Import images directly

import ServiceImage from "../assets/images/serviceImg.png"
import Telemedicine from "../assets/images/Telemedicine.png"
import Medical from "../assets/images/Medservices.png"
import Community from "../assets/images/Community.png"
const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="our-product">
      <div className="our-product-header">
      <h2>Our Products & Services</h2>
      <p>
        Explore the powerful features that make Carenet a trusted healthcare
        platform.
      </p>
      </div>
      <img src={ServiceImage} alt=""/>
        
      <div className="services-1">
      
        <h2>Services</h2>
    <div className="all-services"> 
    <div className="service">
         <div className="serv">
          <img src={Telemedicine} className="img-1"/>
          <div className="telemedicine-info">
          <h3 className="telemed-text">Telemedicine Services</h3>
          <div className="all-paragraph">

          <p>
          Connect with doctors online for quick and professional medical advice, meetings, conferences and medical help</p>

          <p>Schedule a meeting at the time convenient to you on your personalized calendar. Get to contact your doctor 24/7</p>

          <p>Make video and voice conference call
        Access thousand healthcare providers for medical insurance, homecare, personalized services and stay with your community </p>
        </div>
          
          </div>
          
         </div>
        </div>
        <div className="service">
         <div className="serv">
         <div className="telemedicine-info">
          <h3 className="telemed-text">Medical Resources</h3>
          <div className="all-paragraph">
          <p>Access high quality medical library, articles, courses and personal medical records and data storage.</p>
        <p>Create fully personalized medical records data storage where you can upload your health data after taking tests or measurements for easy sharing with your medical devices, diagnoses and prescription purchases</p>
        <p>Articles help you stay in the know. Follow your favorite doctor to get to see their articles when they publish them. You can bookmark or download and publish your articles as much as you want!</p>
         </div>
          </div>
          {/* Telemedicine Image */}
          <img src={Medical} className="img-1"/>
          {/* Text-Content */}
          
          
         </div>
        </div>
        <div className="service">
         <div className="serv">
          {/* Telemedicine Image */}
          <img src={Community} className="img-1"/>
          {/* Text-Content */}
          <div className="telemedicine-info">
          <h3 className="telemed-text">Communities and networking</h3>
          <div className="all-paragraph">
          <p>Connect with professionals to discuss cases, reserach, and find opportunities</p>
         <p>Create a personalized community tailored to your interests and health requirement.</p>
         <p>Join communities and groups of people who share your ideals, health goals and objectives.</p>
        </div>
          </div>
          
         </div>
        </div>
    </div>
        
      </div>

      {/* <Testimonials/> */}

      {/* <button onClick={() => navigate("/")} className="back-home-btn">
        ← Back to Home
      </button> */}
    </section>
  );
};

export default Services;
