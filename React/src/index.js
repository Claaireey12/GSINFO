import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom'; // Client side routing
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Wrap App inside routing and checks then inside root
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
