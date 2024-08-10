import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import your App component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

// Ensure 'root' element exists in your public/index.html
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

// Create the root and render the App component wrapped in Router
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
