import React from 'react';
import "./Sidenav.css";

function Sidenav() {
  const imageUrl = 'https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-White-Logo.wine.svg'; // White Instagram name logo URL

  return (
    <div className="sidenav">
      <img className="sidenav__logo" src={imageUrl} alt="White Instagram Name Logo" />
      <div className="sidenav__button"> 
      <div className="side__button">
        {/*icon*/}
        <span>Home</span>
      </div>
      </div>
    </div>
  );
}

export default Sidenav;
