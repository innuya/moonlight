import React from 'react';
import './style.css';
const Card1 = () => {
  return (
    <>
      <div className="cards">
        <h1 className="best-seller">Our top sellers</h1>
        <div className="card">
          <div className="div1">
            <img src="1img.png" alt="" />
            <h1 className="tcc">Triple chocolate cake</h1>
            <p>serving weight: 100gm</p>
            <br />
            <h2 className="rate">€110</h2>
          </div>
          <div className="div2">
            <img src="2img.png" alt="" />
            <h1 className="tcc">Red velvet cake</h1>
            <p>serving weight: 100gm</p>
            <br />
            <h2 className="rate">€135</h2>
          </div>
          <div className="div3">
            <img src="3img.png" alt="" />
            <h1 className="tcc">Salted caramel cake</h1>
            <p>serving weight: 100gm</p>
            <br />
            <h2 className="rate">€85</h2>
          </div>
          <div className="div4">
            <img src="4img.png" alt="" />
            <h1 className="tcc">Lemon drizzle cake</h1>
            <p>serving weight: 100gm</p>
            <br />
            <h2 className="rate">€145</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
