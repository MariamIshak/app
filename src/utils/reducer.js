import { fetchAPI } from '../api/api';

// Initialize times function using API
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Update times function using API
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload);
    default:
      return state;
  }
};