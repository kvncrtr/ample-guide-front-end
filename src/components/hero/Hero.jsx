import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    console.log('start');
  }, []);

  return (
    <div className="hero--container">

      <div className="hero--card-container">
        
      </div>

    </div>
  );
};

export default Hero;