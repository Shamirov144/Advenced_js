import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/bootstrap.css';
import './assets/slick/slick.css';
import './assets/slick/slick-theme.css';
import './assets/css/style.css';

// Import slick-carousel and jquery for slider functionality
import 'jquery';
import 'slick-carousel';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);