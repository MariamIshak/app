import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Homepage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from './components/Footer';
import { initializeTimes, updateTimes } from './utils/reducer';
import { submitAPI } from './api/api';
import './App.css';

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      // Navigate to confirmation page
      window.location.href = '/confirmed';
    } else {
      alert('Failed to submit reservation. Please try again.');
    }
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route 
          path="/booking" 
          element={
            <BookingPage 
              availableTimes={availableTimes} 
              dispatch={dispatch} 
              submitForm={submitForm}
            />
          } 
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;