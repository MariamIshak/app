import React from 'react';
import image1 from '../assets/restaurant chef B.jpg';
import image2 from '../assets/restaurant.jpg';


function Chicago() {
  return (
    <section className="chicago">
      <div className="chicago-content">
        <h2>Little Lemon Chicago</h2>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
      </div>
      <div className="chicago-images">
        <img src={image1} alt="Little Lemon Interior" />
        <img src={image2} alt="Little Lemon Exterior" />
      </div>
    </section>
  );
}

export default Chicago;