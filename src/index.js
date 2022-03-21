import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxmaZKrJiCogAzJ7Oiu-MWIFviqb6pWB0",
  authDomain: "ipod-5166d.firebaseapp.com",
  projectId: "ipod-5166d",
  storageBucket: "ipod-5166d.appspot.com",
  messagingSenderId: "849990406193",
  appId: "1:849990406193:web:d3450f1546b7ef4cb7c510"
};

// Initialize Firebase
initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

