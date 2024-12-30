import {useEffect} from "react";
import { getLatestPosts } from "../store/post";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestPosts());
  });

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