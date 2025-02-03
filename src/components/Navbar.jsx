import React from 'react';
import "../assets/css/navbar.css";

const Navbar = () => {
  return (
<nav className= "navbar">
    <div className="navbar-logo">Carenet</div>
    <div>
    <button className="navbar-btn">Download App</button>
    </div>
</nav>
  );
};

export default Navbar;
