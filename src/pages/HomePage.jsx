import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { getAllPost } from "../store/post";
import Navbar from '../components/navbar/Navbar';
import Hero from "../components/hero/Hero";

const HomePage = () => {
  const {latestPost, isLoading} = useSelector(state => state.post);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllPost());
  }, []);

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