import React from "react";
import landImg from "../../assets/inherit-the-land.jpg";

const Hero = () => {
  return (
    <div className="hero--container">

      <div className="hero--card-container">
        <div className="hero--card">
          <img className="hero--card-img" src={landImg} alt="landscape aerial view" />

          <div className="hero--card-text-box">
            <h6 className="hero--card-category">space</h6>
          </div>
        </div>

        
        
      </div>

    </div>
  );
};

export default Hero;