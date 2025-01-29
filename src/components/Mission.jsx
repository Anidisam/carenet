import React, { useState } from "react";
import "../assets/css/mission.css";
import "../assets/css/testimonials.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

// Import Testimonial Images
import coliquio from "../assets/images/coliquio.svg";
import frontline from "../assets/images/frontline.svg";
import jim from "../assets/images/jim.svg";
import qxmd from "../assets/images/qxmd.svg";
import saned from "../assets/images/saned.svg";

const testimonials = [
  {
    id: 1,
    name: "Solape Lagbaja",
    role: "Surgeon",
    rating: 5,
    image: coliquio,
    quote: "Simply the best",
    description:
      "This platform has helped me grow! Thanks Carenet, absolutely recommend it for all pros.",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Cardiologist",
    rating: 4,
    image: frontline,
    quote: "Great Experience!",
    description:
      "An amazing platform that has enhanced my career and network with other professionals.",
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Dentist",
    rating: 5,
    image: jim,
    quote: "Fantastic!",
    description: "I have learned so much from Carenet. Highly recommended!",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Pediatrician",
    rating: 4,
    image: qxmd,
    quote: "Amazing Service",
    description: "A platform that truly cares about medical professionals.",
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Orthopedic Surgeon",
    rating: 5,
    image: saned,
    quote: "Top-notch platform!",
    description: "Carenet has provided me with invaluable resources!",
  },
];

const Mission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Array of partner images
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

  return (
    <div className="mission-section">
      {/* OUR MISSION */}
      <div className="text-center section">
        <h2 className="fw-bold">OUR MISSION</h2>
        <p className="text-muted">
          Our mission is to improve patient care by providing comprehensive
          clinical information <br /> and resources essential to physicians and
          healthcare professionals.
        </p>
      </div>

      {/* Space */}
      <div className="spacer"></div>

      {/* WHO WE ARE */}
      <div className="text-center section">
        <h2 className="fw-bold">WHO WE ARE</h2>
        <p className="text-muted">
          Medscape is the leading online global destination for physicians and{" "}
          <br />
          healthcare professionals worldwide, offering the latest medical news
          and <br />
          expert perspectives; essential point-of-care drug and disease
          information; <br />
          and relevant professional education and CME. <br />
          Medscape membership is free and gives you unlimited access to the
          entire <br />
          network of sites and services.
        </p>
      </div>

      {/* Space */}
      <div className="spacer"></div>

      {/* OUR NETWORK OF PARTNER */}
      <div className="text-center section">
        <h2 className="fw-bold">OUR NETWORK OF PARTNER</h2>
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

      {/* Space */}
      <div className="spacer"></div>

      {/* TESTIMONIALS SECTION */}
      <div className="testimonial-container">
        <h2 className="fw-bold text-center"></h2>

        {/* Left Arrow */}
        <button className="arrow left" onClick={handlePrev}>
          <FaArrowLeft />
        </button>

        {/* Testimonial Content */}
        <div className="testimonial-card">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonial-image"
          />

          <div className="testimonial-content">
            <h3>{testimonials[currentIndex].name}</h3>
            <p className="role">{testimonials[currentIndex].role}</p>
            <p className="quote">"{testimonials[currentIndex].quote}"</p>
            <p className="description">
              {testimonials[currentIndex].description}
            </p>
            <div className="stars">
              {"★".repeat(testimonials[currentIndex].rating)}
              {"☆".repeat(5 - testimonials[currentIndex].rating)}
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="arrow right" onClick={handleNext}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Mission;
