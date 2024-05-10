import './App.css';
import React from 'react';
import Price from './components/Price/Price';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="main-container">
      <div className="image-side">
        <img src="./assets/img/image-product-desktop.jpg" alt="perfume" />
      </div>
      <div className="item-info-container">
        <small className="item-category">PERFUME</small>
        <h1 className="item-name">Gabrielle Essence Eau De Parfum</h1>
        <p className="item-details">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <Price />
        <Button />
      </div>
    </div>
  );
}

export default App;
