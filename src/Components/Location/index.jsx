import React from 'react';

const Location = () => {
  return (
    <>
      <div className="online">
        <div className="left-img">
          <img className="map" src="image map.png" alt="" />
        </div>
        <div className="bg-text">
          <h2>Find your store</h2>
          <h1>
            Visit Moonlight <br />
            Your Local Dessert <br /> Destination
          </h1>
          <div className="menu-btn">
            <button className="menu">Find store</button>
          </div>
          <p className="online-text">
            Working hours <br />
            Everyday : From 12.30 To 23.00 Kitchen Closes At 22.00
          </p>
        </div>
      </div>
    </>
  );
};

export default Location;
