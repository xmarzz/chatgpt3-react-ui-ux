import React from "react";
import "./article.css";

const article = ({ imgUrl, date, text }) => {
  return (
    <div className="gpt3__blog-container_article">
        <div className=" gpt3__blog-container_article-image">
                 <img src={imgUrl} alt="blog image" />
        </div>
        <div className="gpt3__blog-container_article-content">
                  <div>
                     <p>{Date}</p>
                     <h3>{text}</h3>
                     <p>Read Full Article</p>
                  </div>
        </div>
    </div>
  );
};

export default article;
