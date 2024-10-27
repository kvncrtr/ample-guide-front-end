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
              <div>
                <span className="hero--writer">Kevin Carter</span> - <span className="hero--time">13 hours ago</span>
              </div>
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
              <div>
                <span className="hero--writer">Kevin Carter</span> - <span className="hero--time">13 hours ago</span>
              </div>
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
              <div>
                <span className="hero--writer">Kevin Carter</span> - <span className="hero--time">13 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero--headline-container">
        <h3 className="hero--headline-title">Top Headlines</h3>

        <div className="hero--list">

          <div className="hero--item">
            <div className="hero--square-case">
              <div className="hero--item-square"></div>
            </div>
            <p className="hero--item-description">The Hisense C2 
              Ultra is a well-rounded, great-looking home 
              projector
            </p>
          </div>

          <div className="hero--item">
            <div className="hero--square-case">
              <div className="hero--item-square"></div>
            </div>
            <p className="hero--item-description">
              FTC hits Lyft with $2.1M penalty for luring drivers 
              with false earnings claims
            </p>
          </div>

          <div className="hero--item">
            <div className="hero--square-case">
              <div className="hero--item-square"></div>
            </div>
            <p className="hero--item-description">
              ‘Yikes’: While gaming, Musk inadvertently broadcasts 
              ‘scary’ near-abort of Starship booster landing
            </p>
          </div>

          <div className="hero--item">
            <div className="hero--square-case">
              <div className="hero--item-square"></div>
            </div>
            <p className="hero--item-description">
              User’s guide to TechCrunch Disrupt 2024
            </p>
          </div>

          <div className="hero--item">
            <div className="hero--square-case">
              <div className="hero--item-square"></div>
            </div>
            <p className="hero--item-description">
              The fediverse is getting its own TikTok competitor 
              called Loops
            </p>
          </div>
        </div>
      </div>

      <div className="hero--shapes">
        <div className="shapes--row-1">
          <div className="shapes--dark"></div>
          <div className="shapes--light"></div>
        </div>

        <div className="row-2">
          <div className="shapes--none"></div>
          <div className="shapes--middle"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;