import React from 'react';
import './style.css';
const SweetJourney = () => {
  return (
    <>
      <div className="main-boby">
        <div className="sweet">
          <div className="content">
            <h3 className="about">About Moonlight</h3>
            <br />
            <h1 className="sj-text">
              Our Sweet Journey <br />
              Underthe Moonlight
            </h1>
            <br />
            <p>
              Moonlight began with a dream to craft magical moments with every
              bite. <br /> Born from a passion for baking and a love for
              desserts, we use the finest <br /> ingredients to create
              confections that are not only delicious but also <br />{' '}
              unforgettable. Every dessert is made with love, attention to
              detail, and a<br /> commitment to quality
            </p>
            <br />
            <div className="but">
              <button className="order">Order Now</button>
            </div>
          </div>
        </div>
        <div className="imagediv">
          <img className="imagediv2" src="imagediv.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default SweetJourney;
