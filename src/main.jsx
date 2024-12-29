import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import './styles/index.css';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom'; // Import the Router

// Function to load Google Analytics
const loadGoogleAnalytics = () => {
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ELY8BG1HMJ';
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    // Initialize Google Analytics gtag function once the script loads
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-ELY8BG1HMJ'); // Your Google Analytics ID
  };
};

// Call to load the Google Analytics script
loadGoogleAnalytics();

// Render the React app inside the Router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router> {/* Wrap the app with Router */}
        <Home />
      </Router>
    </I18nextProvider>
  </StrictMode>
);
