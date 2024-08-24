import React from "react";
import './ListArticles.css'
import DisplayArticleCard from "./DisplayArticleCard.js"


function ListArticles (props) {
  const {articles} = props

  return (
    <div id="main">
      <div id="header">
        <p id="points">Score</p>
        <p id="title">Title</p>
        <p id="author">Author</p>
        <p id="datePosted">Date Posted</p>
        <p id="url">URL</p>
      </div>
      <ol>{articles.map((item, index) => {
        return <DisplayArticleCard
        key={index}
        points={item.points}
        author={item.author}
        createdAt={item.created_at.slice(0, 10)}
        url={item.url}
        title={item.title}
        tags={item._tags}
        />
      })}
      </ol>
    </div>
  )
}

export default ListArticles;