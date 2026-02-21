import React, { useState } from 'react';
import { submitAPI } from '../api/api';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime(''); // Reset time when date changes
    dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      date: new Date(date),
      time,
      guests: parseInt(guests),
      occasion,
    };

    // Call submitForm from props
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="res-date">Choose date</label>
        <input 
          type="date" 
          id="res-date" 
          value={date} 
          onChange={handleDateChange} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">Choose time</label>
        <select 
          id="res-time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)} 
          required
          disabled={!date}
        >
          <option value="">Select a time</option>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input 
          type="number" 
          id="guests" 
          min="1" 
          max="10" 
          value={guests} 
          onChange={(e) => setGuests(e.target.value)} 
          required 
        />
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select 
          id="occasion" 
          value={occasion} 
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button type="submit" className="submit-btn" disabled={!date || !time}>
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;