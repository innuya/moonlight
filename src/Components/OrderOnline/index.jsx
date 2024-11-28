import React from 'react';
import './style.css';
const OrderOnline = () => {
  return (
    <>
      <div className="online">
        <div className="left-img">
          <img className="women" src="image women.png" alt="" />
        </div>
        <div className="bg-text">
          <h2>Online order</h2>
          <h1>
            Order Your Sweet <br />
            Delights Online
          </h1>
          <p className="online-text">
            Craving something sweet? With Moonlight’s online ordering, you can
            enjoy our <br /> handcrafted desserts from the comfort of your home.
          </p>
          <div className="menu-btn">
            <button className="menu">VIEW MENU</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderOnline;
