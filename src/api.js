
// API wrapper to make fetchAPI and submitAPI available to the app
// These functions are loaded from the external script in index.html

export const fetchAPI = (dateString) => {
  // Convert string date to Date object for the API
  const date = new Date(dateString);
  
  if (window.fetchAPI) {
    return window.fetchAPI(date);
  }
  // Fallback if API is not loaded
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

export const submitAPI = (formData) => {
  if (window.submitAPI) {
    return window.submitAPI(formData);
  }
  // Fallback if API is not loaded
  return true;
};