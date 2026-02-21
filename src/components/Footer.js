import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <img src={logo} alt="Little Lemon Logo" />
          <p className="footer-description">
            We are a family owned Mediterranean restaurant, focused on traditional 
            recipes served with a modern twist.
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="#about">About</Link></li>
            <li><Link to="#menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="#order">Order Online</Link></li>
            <li><Link to="#login">Login</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <address className="footer-contact">
            <p>123 Main Street</p>
            <p>Chicago, IL 60601</p>
            <p><a href="tel:+11234567890">(123) 456-7890</a></p>
            <p><a href="mailto:info@littlelemon.com">info@littlelemon.com</a></p>
          </address>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Social Links</h3>
          <ul className="footer-social">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;