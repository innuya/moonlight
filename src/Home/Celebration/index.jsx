import React from 'react';
import './style.css';
const Celebration = () => {
  return (
    <>
      <div className="online">
        <div className="bg-text">
          <h2>Parties & Events</h2>
          <h1>
            Make Your <br /> Celebrations Sweeter
            <br /> with Moonlight
          </h1>
          <p className="online-text">
            From intimate gatherings to large celebrations, Moonlight is here to
            add
            <br /> sweetness to every occasion. Whether it’s a birthday,
            wedding, corporate <br />
            event, or family gathering, our expertly crafted desserts will leave
            your
            <br /> guests delighted.
          </p>
          <div className="menu-btn">
            <button className="menu">Book Event</button>
          </div>
        </div>
        <div className="right-img">
          <img className="women" src="bride.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Celebration;
