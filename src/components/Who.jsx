import React from "react";
import "../assets/css/who.css";
import heroBg from "../assets/images/girl phone.svg"; // replace with your transparent bg image

const Who = () => {
  return (
    <div className="who-we-are-page">
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Carenet is a platform dedicated to connecting healthcare
            professionals worldwide. Our mission is to provide top-quality
            medical resources, networking opportunities, and expert insights to
            improve patient care. 
          
            Whether you're a doctor, nurse, or medical
            student, Carenet offers essential tools to enhance your career and
            knowledge. Introducing CareNet: Revolutionizing Healthcare with
            Virtual Sessions In today's fast-paced world, finding time to visit
            a doctor or health professional can be challenging. Long waiting
            lines, busy schedules, and geographical constraints can hinder
            access to quality healthcare. That's where HealthConnect comes in –
            a groundbreaking health app designed to bridge the gap between users
            and health professionals
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who;
