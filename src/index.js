import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// Add the Font Awesome CSS links here
import './Assets/fontawesome/css/fontawesome.css'
import './Assets/fontawesome/css/brands.css'
import './Assets/fontawesome/css/solid.css'

//custom css
import '../src/App.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


