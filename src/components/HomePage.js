import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';

// Initialize times function
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

// Update times function (reducer)
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return same times regardless of date
      return initializeTimes();
    default:
      return state;
  }
};

export default function HomePage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  // Check if we're on booking page (simple check via URL or props)
  // Since this is the main container, we'll render conditionally based on route
  // But in this setup, Homepage is only for "/", so we handle booking separately
  
  return (
    <main>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </main>
  );
}

// Export BookingPage with state
export { HomePage, BookingPage, initializeTimes, updateTimes };