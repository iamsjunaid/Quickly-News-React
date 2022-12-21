import React, { Component } from "react";

const Newsitem = (props) => {
   
    let {title, description, urlToImage, url, author, date, source} = props
    return (
      <div>
        {/* <div><img src={img} alt="myimage" /></div> */}
        <div className="card mt-4" >
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
        <span className="badge rounded-pill bg-danger" >{source}</span>

          </div>

          <img src={!urlToImage ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn--wm8bBojawXcqX607UNOSqMLup_B5AyIwWPHfXvzZcP91daEBo4rxp88R9eUJtrJ7o&usqp=CAU":urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">By {!author?"Unknown":author} on {date}</small>
            </p>
            <a href={url} className="btn btn-dark" target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Newsitem;
