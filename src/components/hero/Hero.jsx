import PreviewCard from "../shared/PreviewCard";
import { useSelector } from "react-redux";

const Hero = () => {
  const lead = useSelector(state => state.post.leadPost);
  const next = useSelector(state => state.post.nextPosts);

  return (
    <div className="hero--container">
      
      <div className="hero--title-container">
        <h1 className="hero--title">Ample Guide</h1>
      </div>
      
      <div className="hero--section">
        <div className="hero--card-container">

          <PreviewCard key={lead.id} post={lead} />
          {next.map(post => {
            return ( <PreviewCard key={post.id} post={post} /> );
          })}

        </div>

        <div className="hero--headline-case">
          <h4>Top Headlines</h4>

          <ul>
            <li>hey</li>
            <li>hey</li>
            <li>hey</li>
            <li>hey</li>
            <li>hey</li>
            <li>hey</li>
            <li>hey</li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Hero;