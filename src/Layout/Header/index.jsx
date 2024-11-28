import React from 'react';
import './style.css';
const Header = () => {
  return (
    <>
      <div>
        <nav className="navbar">
          <div className="nav-headers">
            <div className="left">
              <div className="logo">
                <img src="Layer_1.png" alt="" />
              </div>
            </div>
            <div className="right">
              <ul className="header-names">
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>CART</li>
                <li>MENU</li>
                <li>OFFERS</li>
                <li>
                  <img src="search.png" alt="" />
                </li>
                <li>
                  <img src="bag.png" alt="" />
                </li>
                <li className="li-but">
                  <button className="btn">BOOK NOW</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
