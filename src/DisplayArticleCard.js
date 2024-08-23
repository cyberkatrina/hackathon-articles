import React, { useState, useEffect} from 'react';
import './DisplayArticleCard.css';


function DisplayArticleCard(props) {

  // const [articles, setArticles] = useState([]);
  const {points, author, createdAt, url, title, tags} = props

  return (
    <div className="main">
      <p>{points}</p>
      <p>{author}</p>
      <p>{createdAt}</p>
      <p>{url}</p>
      <p>{title}</p>

      <br></br>


    </div>
  );
}

export default DisplayArticleCard;
