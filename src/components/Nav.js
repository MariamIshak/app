import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/Logo.svg';
function Nav() {
  return (
    <nav>
      <div className="nav-content">
        <img src={image} alt="Little Lemon Logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="#menu">Menu</Link></li>
          <li><Link to="#order">Order Online</Link></li>
          <li><Link to="#login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;