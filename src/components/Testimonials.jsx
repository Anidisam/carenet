import React from "react";
import "../assets/css/testimonials.css"; // Import the CSS file

import image1 from "../assets/images/testi 1.svg";
import image2 from "../assets/images/testi 2.svg";
import image3 from "../assets/images/testi 3.svg";

const testimonials = [
  {
    name: "Dr lara",
    role: "health care",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.",
    image: image1,
  },
  {
    name: "Dr smith",
    role: "SLT",
    text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
    image: image2,
  },
  {
    name: "Dr wilson",
    role: "MLS",
    text: "Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh.",
    image: image3,
  },
];


const Testimonials = () => {
  return (
    <div className="testimonial-section">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-container">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="testimonial-img"
          />
          <h1>{testimonial.name}</h1>
          <h2>{testimonial.role}</h2>
          <p>{testimonial.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
