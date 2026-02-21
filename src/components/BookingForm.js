import React, { useState } from 'react';
import { submitAPI } from '../api/api';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 2,
    occasion: 'Birthday',
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: '',
    name: '',
    email: '',
  });

  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
    name: false,
    email: false,
  });

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'date':
        if (!value) {
          error = 'Date is required';
        }
        break;
        
      case 'time':
        if (!value) {
          error = 'Time is required';
        }
        break;
        
      case 'guests':
        if (!value) {
          error = 'Number of guests is required';
        } else if (parseInt(value) < 1) {
          error = 'Must have at least 1 guest';
        } else if (parseInt(value) > 10) {
          error = 'Maximum 10 guests allowed';
        }
        break;
        
      case 'occasion':
        if (!value) {
          error = 'Occasion is required';
        }
        break;
        
      case 'name':
        if (!value) {
          error = 'Name is required';
        } else if (value.length < 2) {
          error = 'Name must be at least 2 characters';
        }
        break;
        
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Please enter a valid email';
        }
        break;
        
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const isFormValid = () => {
    const requiredFields = ['date', 'time', 'guests', 'occasion', 'name', 'email'];
    
    for (const field of requiredFields) {
      const value = formData[field];
      const error = validateField(field, value);
      if (error) {
        return false;
      }
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      date: true,
      time: true,
      guests: true,
      occasion: true,
      name: true,
      email: true,
    });
    
    // Validate all fields
    const newErrors = {};
    let hasError = false;
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      newErrors[key] = error;
      if (error) {
        hasError = true;
      }
    });
    
    setErrors(newErrors);
    
    if (!hasError && isFormValid()) {
      const formattedData = {
        date: new Date(formData.date),
        time: formData.time,
        guests: parseInt(formData.guests),
        occasion: formData.occasion,
        name: formData.name,
        email: formData.email,
      };
      
      submitForm(formattedData);
    }
  };

  const getInputClassName = (fieldName) => {
    let className = 'form-input';
    if (touched[fieldName] && errors[fieldName]) {
      className += ' invalid';
    }
    return className;
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={getInputClassName('date')}
        />
        {touched.date && errors.date && (
          <span className="error-message">{errors.date}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="time">Choose time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={getInputClassName('time')}
          disabled={!formData.date}
        >
          <option value="">Select a date first</option>
          {availableTimes.map((timeOption) => (
            <option key={timeOption} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
        {touched.time && errors.time && (
          <span className="error-message">{errors.time}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={getInputClassName('guests')}
        />
        {touched.guests && errors.guests && (
          <span className="error-message">{errors.guests}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={getInputClassName('occasion')}
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Date Night">Date Night</option>
          <option value="Business Meal">Business Meal</option>
          <option value="Other">Other</option>
        </select>
        {touched.occasion && errors.occasion && (
          <span className="error-message">{errors.occasion}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          minLength="2"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={getInputClassName('name')}
          placeholder="Enter your name"
        />
        {touched.name && errors.name && (
          <span className="error-message">{errors.name}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          className={getInputClassName('email')}
          placeholder="Enter your email"
        />
        {touched.email && errors.email && (
          <span className="error-message">{errors.email}</span>
        )}
      </div>

      <button
        type="submit"
        className="submit-btn"
        disabled={!isFormValid()}
      >
        Submit Reservation
      </button>
    </form>
  );
}

export default BookingForm;