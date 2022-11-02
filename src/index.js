import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
const DATA = [
    { id: "1", name: "BTC", price: "price", logo: "logo", marketCap: "marketCap", sev_d: "7d" },
    { id: "2", name: "LTC", price: "price", logo: "logo", marketCap: "marketCap", sev_d: "7d" },
    { id: "74", name: "DOGE", price: "price", logo: "logo", marketCap: "marketCap", sev_d: "7d" }
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( < App curency = { DATA }
        />);