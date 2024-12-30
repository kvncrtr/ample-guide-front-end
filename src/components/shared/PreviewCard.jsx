const PreviewCard = ({ post }) => {
   const { thumbnail_url, headline, about, author, time_created } = post;

   return (
      <div className={"preview--card-case"}>
         <img className={"preview--card-img"} src={thumbnail_url} alt={headline} />
         
         <div className="preview--card-gradient"></div>
         <div className="preview--card-text-box">
         <h6 className="preview--card-category">{about}</h6>
         <h1>{headline}</h1>
         
         <div className="preview--card-details">
            <p>{author}</p>
            <div>{time_created}</div>
         </div>
         </div>
      </div>
   );
};

export default PreviewCard;