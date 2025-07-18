import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // or ./services/App.jsx if that's where it is
import { BrowserRouter } from 'react-router-dom'; // ✅ MUST import this
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Fix: Wrap App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
