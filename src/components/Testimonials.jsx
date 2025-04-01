import React from "react";
import "../assets/css/testimonials.css"; // Import the CSS file

import image1 from "../assets/images/testi 1.svg";
import image2 from "../assets/images/testi 2.svg";
import image3 from "../assets/images/testi 3.svg";

const testimonials = [
  {
    name: "LAGBAJA TEMEDU",
    role: "Excellent Services",
    text: "I love the services. Fast, quality and cool. Highly recommend it for everyone!",
    image: image1,
  },
  {
    name: "CLAUDIA JANE DOE",
    role: "At long last, a place to network",
    text: "Finally, I find a place to network with people in my field, share ideas and get to help real people virtually!",
    image: image2,
  },
  {
    name: "FATIMA FU KHYU",
    role: "A place for health concious people",
    text: "Download the app and enjoy everything it has to offer. I and my husband are always on here. Enjoy it!",
    image: image3,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h1 className="section-title"><b>Testimonials</b></h1>
      <div className="testimonial-wrapper">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-container position-${index}`}
            style={{ backgroundImage: `url(${testimonial.image})` }} // Background image
          >
            <h2>{testimonial.name}</h2>
            <h3>{testimonial.role}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
