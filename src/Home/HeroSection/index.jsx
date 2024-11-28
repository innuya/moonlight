import React from 'react';
import './style.css';
const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="texts">
          <h1>
            Indulge in the <br /> Magic of Desserts
          </h1>
          <p>Moonlight brings you handcrafted desserts made with love.</p>
        </div>
        <div className="button">
          <button>Book Table</button>
        </div>
        <div>
          <img src="Group.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
