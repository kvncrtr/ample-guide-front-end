import PreviewCard from "../shared/PreviewCard";
import { useSelector } from "react-redux";

const Hero = () => {
  const latestPosts = useSelector(state => state.post.latestPosts);

  return (
    <div className="hero--container">

      <div className="hero--card-container">
        {latestPosts.map(post => {
          return ( <PreviewCard key={post.id} post={post} /> );
        })}
      </div>

    </div>
  );
};

export default Hero;