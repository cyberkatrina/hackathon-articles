import React from "react";
import './ListArticles.css'
import DisplayArticleCard from "./DisplayArticleCard"


function ListArticles (props) {
  const {articles} = props

  return (
    <div id="main">
      <ol>{articles.map((item, index) => {
        return <DisplayArticleCard
        key={index}
        points={item.points}
        author={item.author}
        dateCreated={item.created_at.slice(0, 10)}
        url={item.url}
        title={item.title}
        />
      })}
      </ol>
    </div>
  )
}

export default ListArticles;