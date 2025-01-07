import { Link } from "react-router-dom";
import Time from "../../utils/time";

const PreviewCard = ({ post }) => {
   const { id, thumbnail_url, headline, about, author, time_created } = post;

   const RenderTime = (time_created) => {
      return Time.CalcTimeLapse(time_created);
   };   

   return (
      <div className={`preview--card-case post--${id}`}>
         <Link to={`/post/${id}`}>
            <img className={"preview--card-img"} src={thumbnail_url} alt={headline} />
            
            <div className="preview--card-gradient"></div>
            <div className="preview--card-text-box">
            <h6 className="preview--card-category">{about}</h6>
            <h1>{headline}</h1>
            
            <div className="preview--card-details">
               <p>{author}</p>
               <div>{RenderTime(time_created)}</div>
            </div>
            </div>
         </Link>
      </div>
   );
};

export default PreviewCard;