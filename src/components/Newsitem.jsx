import React from 'react';
import image from '../assets/news.jpg'
const Newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      {/* Wrap the image in a container div with fixed height */}
      <div className="card-img-container" style={{ maxHeight: "200px", overflow: "hidden" }}>
        <img src={src?src:image} className="card-img-top" alt="..." style={{ width: "100%", height: "auto" }} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">{description ? description.slice(0, 90) : "News is fetched"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default Newsitem;
