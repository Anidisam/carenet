import React from "react";
import "../assets/css/footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/Carenet logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section - Links */}
      <div className="footer-top">
        <ul>
          <li>
            <Link to="/who-we-are">Who We Are</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </div>

      {/* Middle Section - Logo and Brand Name */}
      <div className="footer-logo-container">
        <img src={logo} alt="Carenet Logo" className="footer-logo" />
        <span className="footer-brand">Carenet</span>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <h3>Follow Us</h3>
        <div className="social-links">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>

      {/* Bottom Section - Copyright and Legal Links */}
      <div className="footer-legal">
        <p>© 2025 Carenet</p>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <hr />
          <Link to="/terms-of-use">Terms of Use</Link>
          <hr />
          <Link to="/legal-notice">Legal Notice</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;














// import React from "react";
// import { Link } from "react-router-dom";
// import "../assets/css/footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-column">
//           <h4>Company</h4>
//           <ul>
//             <li>
//               <Link to="/about-us">About Us</Link>
//             </li>
//             <li>
//               <Link to="/our-product">Our Product</Link>
//             </li>
//             <li>
//              <Link to="/contact-us">Contact Us</Link>
//             </li>
//             <li>
//               <a href="#">Download App</a>
//             </li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h4>Resources</h4>
//           <ul>
//             <li>
//               <a href="#">Career</a>
//             </li>
//             <li>
//               <a href="#">Blog</a>
//             </li>
//             <li>
//               <a href="#">Newsletter</a>
//             </li>
//             <li>
//               <a href="#">Communities</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <p>© 2024 Carenet. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
