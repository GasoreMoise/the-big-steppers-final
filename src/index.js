import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./config/i18n";

// Add global event listeners for cultural preferences
document.addEventListener('DOMContentLoaded', () => {
  // Detect user's region and preferences
  const userRegion = navigator.language.split('-')[1] || 'US';
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Store these preferences for use throughout the app
  window.globalPreferences = {
    region: userRegion,
    timeZone: userTimeZone,
    // Add more preferences as needed
  };
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

