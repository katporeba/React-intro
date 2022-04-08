// importing react
import React from 'react';
// importing reactDOM
import ReactDOM from 'react-dom';
import './index.css';
// our app comes from app.js, app contains root app component
import App from './App';
import reportWebVitals from './reportWebVitals';

// method on reactDOM called render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
    // grabbing the element of id root, and we are inserting our app into that div
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
