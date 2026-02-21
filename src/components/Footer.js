import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-column">
        <img src="logo.png" alt="Little Lemon Logo" />
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </div>
      <div className="footer-column">
        <h3>Navigation</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#reservations">Reservations</a></li>
          <li><a href="#order">Order Online</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Contact</h3>
        <p>Address: 123 Main St, Chicago, IL</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@littlelemon.com</p>
      </div>
      <div className="footer-column">
        <h3>Social Links</h3>
        <ul>
          <li><a href="#facebook">Facebook</a></li>
          <li><a href="#instagram">Instagram</a></li>
          <li><a href="#twitter">Twitter</a></li>
          <li><a href="#linkedin">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;