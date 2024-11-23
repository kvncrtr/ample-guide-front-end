import React, { useContext } from 'react';
import StoreContext from '../context/storeContext';
import Navbar from '../components/navbar/Navbar';
import Hero from "../components/hero/Hero";

const HomePage = () => {
  const store = useContext(StoreContext);
  console.log(store);
  

  return (
    <div className="home--container">
      <h1 className="home--title">Ample Guide</h1>

      <Navbar />
      <Hero />
    </div>
  )
};

export default HomePage;
// git add .; git commit -m ""; git push origin home;
// git switch main; git merge home; git push; git switch home;