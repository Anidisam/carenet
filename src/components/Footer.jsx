import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <a href="#">Our Product</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Download App</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Newsletter</a>
            </li>
            <li>
              <a href="#">Communities</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Carenet. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
