import React from 'react';
import './style.css';
const index = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          <div>
            <img src="Layer_1.png" alt="" />
          </div>
          <br />
          <div>
            <h1>Subscribe to our newsletter</h1>
          </div>
          <br />
          <form>
            <input type="email" placeholder="Email Address" />
            <div>
              <button>SUBCRIBE</button>
            </div>
          </form>
          <br />
          <div className="deatails">
            <p className="p-detail">Contact U</p>
            <p className="p-detail">0151 245 1500</p>
            <p className="p-detail">INFO@MOONLIGHT.CO.UK</p>
            <p className="p-detail">MOONLIGHT,LIVERPOOL L25 7RE</p>
          </div>
          <br />
          <ul className="header-names">
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>CART</li>
            <li>MENU</li>
            <li>OFFERS</li>
          </ul>
          <br />
          <div className="icon-imgs">
            <img className="icon" src="img1.png" alt="" />
            <img className="icon" src="img2.png" alt="" />
            <img className="icon" src="img3.png" alt="" />
            <img className="icon" src="img4.png" alt="" />
          </div>
          <br />
          <h2>@ 2024 Moonlight</h2>
        </div>
      </div>
    </>
  );
};

export default index;
