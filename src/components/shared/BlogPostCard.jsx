const BlogPostCard = () => {
   return (
      <div className="card--container">
         <img className="hero--card-img" src={""} alt="landscape aerial view" />
         
         <div className="hero--gradient"></div>
         <div className="hero--card-text-box">
         <h6 className="hero--card-category">space</h6>
         <h1>SpaceX releases $800M worth of aerial footage</h1>
         
         <div className="hero--card-details">
            <p>Kevin Carter</p>
            <div>- 13 hours ago</div>
         </div>
         </div>
      </div>
   );
};

export default BlogPostCard;