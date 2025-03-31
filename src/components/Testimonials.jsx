import React from "react";
import "../assets/css/testimonials.css"; // Import the CSS file

import image1 from "../assets/images/testi 1.svg";
import image2 from "../assets/images/testi 2.svg";
import image3 from "../assets/images/testi 3.svg";

const testimonials = [
  {
    name: "Dr. Lara",
    role: "Health Care",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    image: image1,
  },
  {
    name: "Dr. Smith",
    role: "SLT",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: image2,
  },
  {
    name: "Dr. Wilson",
    role: "MLS",
    text: "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh.",
    image: image3,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h1>Testimonials</h1>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-container"
          style={{ backgroundImage: `url(${testimonial.image})` }} // Background image
        >
          <h1>{testimonial.name}</h1>
          <h2>{testimonial.role}</h2>
          <p>{testimonial.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
