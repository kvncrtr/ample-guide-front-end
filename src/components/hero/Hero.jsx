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
          <div className="hero--lead-case">
            <PreviewCard key={lead.id} post={lead} />
          </div>

          <div className="hero--secondary-case">
            <div className="hero--next-case">
              {next.map(post => {
                return ( <PreviewCard key={post.id} post={post} /> );
              })}
            </div>

            <div className="hero--headline-case">
              <h2>Top Headlines</h2>

              <div className="hero--list">
                <div className="hero--list-item">Bench saved by the bell, and other last-minute deals that closed 2024</div>
                <div className="hero--list-item">Apple TV+ is free to stream this weekend</div>
                <div className="hero--list-item">FTC orders AI accessibility startup accessiBe to pay $1M for misleading advertising</div>
                <div className="hero--list-item">US sanctions Chinese cyber firm linked to Flax Typhoon hacks</div>
                <div className="hero--list-item">Hydrogen tax credit rules give startups clarity while boosting nuclear and carbon capture</div>
              </div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;