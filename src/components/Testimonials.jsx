// import React, { useState } from "react";
// import "../assets/css/testimonials.css";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// import coliquio from "../assets/images/coliquio.svg";
// import frontline from "../assets/images/frontline.svg";
// import jim from "../assets/images/jim.svg";
// import qxmd from "../assets/images/qxmd.svg";
// import saned from "../assets/images/saned.svg";


// const testimonials = [
//   {
//     id: 1,
//     name: "Solape Lagbaja",
//     role: "Surgeon",
//     rating: 5,
//     image: coliquio, 
//     quote: "Simply the best",
//     description:
//       "This platform has helped me grow! Thanks Carenet, absolutely recommend it for all pros.",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     role: "Cardiologist",
//     rating: 4,
//     image: frontline,
//     quote: "Great Experience!",
//     description:
//       "An amazing platform that has enhanced my career and network with other professionals.",
//   },
//   {
//     id: 3,
//     name: "Jane Smith",
//     role: "Dentist",
//     rating: 5,
//     image: jim,
//     quote: "Fantastic!",
//     description: "I have learned so much from Carenet. Highly recommended!",
//   },
//   {
//     id: 4,
//     name: "Emily Johnson",
//     role: "Pediatrician",
//     rating: 4,
//     image: qxmd,
//     quote: "Amazing Service",
//     description: "A platform that truly cares about medical professionals.",
//   },
//   {
//     id: 5,
//     name: "Michael Brown",
//     role: "Orthopedic Surgeon",
//     rating: 5,
//     image: saned,
//     quote: "Top-notch platform!",
//     description: "Carenet has provided me with invaluable resources!",
//   },
// ];


// const Testimonials = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="testimonial-container">

//       <button className="arrow left" onClick={handlePrev}>
//         <FaArrowLeft />
//       </button>

//       <div className="testimonial-card">
//         <img
//           src={testimonials[currentIndex].image}
//           alt={testimonials[currentIndex].name}
//           className="testimonial-image"
//         />

//         <div className="testimonial-content">
//           <h3>{testimonials[currentIndex].name}</h3>
//           <p className="role">{testimonials[currentIndex].role}</p>
//           <p className="quote">"{testimonials[currentIndex].quote}"</p>
//           <p className="description">
//             {testimonials[currentIndex].description}
//           </p>
//           <div className="stars">
//             {"★".repeat(testimonials[currentIndex].rating)}
//             {"☆".repeat(5 - testimonials[currentIndex].rating)}
//           </div>
//         </div>
//       </div>


//       <button className="arrow right" onClick={handleNext}>
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// };

// export default Testimonials;
