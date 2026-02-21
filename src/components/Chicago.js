import React from 'react';
import image1 from '../assets/restaurant chef B.jpg';
import image2 from '../assets/restaurant.jpg';
function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-container">
        <div className="chicago-content">
          <h2 className="chicago-title">Little Lemon</h2>
          <h3 className="chicago-subtitle">Chicago</h3>
          <p className="chicago-description">
            Little Lemon is a charming neighborhood bistro that serves simple food 
            and classic cocktails in a lively but casual environment. The restaurant 
            features a locally-sourced menu with daily specials that are sure to 
            delight your taste buds. Whether you're joining us for a quick lunch 
            or a romantic dinner, our friendly staff will make you feel right at home.
          </p>
          <p className="chicago-description">
            Founded in 2020, we have quickly become a favorite destination for food 
            lovers in the Chicago area. Our commitment to quality ingredients and 
            exceptional service has earned us a reputation for excellence.
          </p>
        </div>
        <div className="chicago-images">
          <img 
            src={image2} 
            alt="Little Lemon Restaurant Interior" 
            className="chicago-image bottom"
          />
          <img 
            src={image1} 
            alt="Little Lemon Restaurant Exterior" 
            className="chicago-image top"
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago;