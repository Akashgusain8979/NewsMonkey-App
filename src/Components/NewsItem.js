import React from "react";

const NewsItem =(props)=> {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{justifyContent: 'flex-end', display: 'flex', position: 'absolute', right:' 0'}}>
            <span className=" badge rounded-pill bg-danger" > {source}</span>
            </div>
          <img
            src={
              !imageUrl
                ? "https://d32r1sh890xpii.cloudfront.net/article/718x300/2022-10-25_nugq5unjol.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          
          
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted"> By {!author ? "unknown" : author} on{" "}{new Date(date).toGMTString()} </small></p>
            <a
              href={newsUrl}
              rel="noopener noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
