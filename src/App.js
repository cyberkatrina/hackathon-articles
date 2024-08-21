import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import ListArticles from './ListArticles';


function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://hn.algolia.com/api/v1/items/3')
        .then(response => {
          return response.json()
       }).then(arrayOfArticles => setArticles(arrayOfArticles))
       .catch(error => console.error('Error fetching users:', error));
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <ListArticles
        articles = {articles}

        />
      </header>
    </div>
  );
}

export default App;
