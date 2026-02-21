import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <div className="confirmation-content">
        <h1>Booking Confirmed!</h1>
        <div className="confirmation-icon">✓</div>
        <p>Your reservation has been successfully submitted.</p>
        <p>We look forward to seeing you at Little Lemon!</p>
        <Link to="/" className="home-link">Return to Home</Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;