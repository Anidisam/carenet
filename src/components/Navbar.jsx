import React from 'react';
import "../assets/css/navbar.css";
// import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
<nav className= "navbar">
    <div className="navbar-logo">Carenet</div>
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      {/* <Link className='link'><li>About</li></Link> */}
      </ul>
      

      
   
    <div>
    <button className="navbar-btn">Download App</button>
    </div>
</nav>
  );
};

export default Navbar;
