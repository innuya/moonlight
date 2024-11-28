import React from 'react';
import './style.css';
const Delightful = () => {
  return (
    <>
      <div className="div">
        <div className="delight">
          <h2>Menu</h2>
          <h1>
            Delightful Selection <br />
            for Every Plate
          </h1>
          <br />
          <div className="butns">
            <button className="b1">Cakes</button>
            <button className="b1">Pastries</button>
            <button className="b1">Ice Cream & Gelato</button>
            <button className="b1">Signature Desserts</button>
          </div>
          <div className="image-ds">
            <img className="image-d2" src="d2.png" alt="" />
            <img className="image-d1" src="d1.png" alt="" />
            <img className="image-d3" src="d3.png" alt="" />
          </div>
          <div>
            <h2 className="triple">Triple chocolate cake</h2>
            <p className="wt">serving weight: 100gm</p>
            <h2 className="rte">€110</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Delightful;
