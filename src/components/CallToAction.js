import React from 'react';
import image from '../assets/restauranfood.jpg';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button><Link to="/booking">Reserve a Table</Link></button>
        </div>
              <img src={image} alt="Little Lemon Restaurant" />

      </div>
    </section>
  );
}

export default CallToAction;