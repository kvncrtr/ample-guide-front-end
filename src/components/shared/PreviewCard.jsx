const PreviewCard = ({ post }) => {
   const { thumbnail_url, headline, about, author, time_created } = post;

   return (
      <div className="card--container">
         <img className="hero--card-img" src={thumbnail_url} alt={headline} />
         
         <div className="hero--gradient"></div>
         <div className="hero--card-text-box">
         <h6 className="hero--card-category">{about}</h6>
         <h1>{headline}</h1>
         
         <div className="hero--card-details">
            <p>{author}</p>
            <div>{time_created}</div>
         </div>
         </div>
      </div>
   );
};

export default PreviewCard;