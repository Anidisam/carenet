import React, { useState } from 'react';
import "../assets/css/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CARENET</Link>
      </div>

      {/* Hamburger Menu Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={menuOpen ? "show" : ""}>
        <li>
          <Link to="/who-we-are" onClick={() => setMenuOpen(false)}>Who We Are</Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        </li>
      </ul>

      <div>
        <button className="navbar-btn">Download App</button>
      </div>
    </nav>
  );
};

export default Navbar;
