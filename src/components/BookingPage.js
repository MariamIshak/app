import React from 'react';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <section className="booking-page">
      <h1>Reserve a Table</h1>
      <p>Please fill out the form below to reserve your table at Little Lemon.</p>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;