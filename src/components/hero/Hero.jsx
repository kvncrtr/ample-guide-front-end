import React from "react";
import landImg from "../../assets/inherit-the-land.jpg";

const Hero = () => {
  return (
    <div className="hero--container">

      <div className="hero--card-container">
        
        <div className="hero--card">
          <img className="hero--card-img" src={landImg} alt="landscape aerial view" />
          
          <div className="hero--gradient"></div>
          <div className="hero--card-text-box">
            <h6 className="hero--card-category">space</h6>
            <h1>SpaceX releases $800M worth of aerial footage</h1>
            
            <div className="hero--card-details">
              <p>Kevin Carter</p>
              <div>- 13 hours ago</div>
            </div>
          </div>
        </div>

        <div className="hero--card">
          <img className="hero--card-img" src={landImg} alt="landscape aerial view" />
          
          <div className="hero--gradient"></div>
          <div className="hero--card-text-box">
            <h6 className="hero--card-category">space</h6>
            <h1>SpaceX releases $800M worth of aerial footage</h1>
            
            <div className="hero--card-details">
              <p>Kevin Carter</p>
              <div>- 13 hours ago</div>
            </div>
          </div>
        </div>

        <div className="hero--card">
          <img className="hero--card-img" src={landImg} alt="landscape aerial view" />
          
          <div className="hero--gradient"></div>
          <div className="hero--card-text-box">
            <h6 className="hero--card-category">space</h6>
            <h1>SpaceX releases $800M worth of aerial footage</h1>
            
            <div className="hero--card-details">
              <p>Kevin Carter</p>
              <div>- 13 hours ago</div>
            </div>
          </div>
        </div>

        
        
      </div>

    </div>
  );
};

export default Hero;
// 