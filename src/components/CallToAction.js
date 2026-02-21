import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/customer4.png';
function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking" className="hero-button">
            Reserve a Table
          </Link>
        </div>
        <div className="hero-image-container">
          <img 
            src={image} 
            alt="Little Lemon Restaurant - Mediterranean dishes" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;