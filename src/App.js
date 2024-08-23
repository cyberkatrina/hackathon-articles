import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import ListArticles from './ListArticles';


function App() {

  const [articles, setArticles] = useState([])
  const [searchTerm, setSearch] = useState([])

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?query=react')
        .then(response => {
          return response.json()
       }).then(arrayOfArticles => setArticles(arrayOfArticles))
       .catch(error => console.error('Error fetching users:', error));
  }, []);


  const handleChange = (event) => {
    setSearch(event.target.value)
  }


  const filterSearch = (term) => {
    return (item) => {
      if (item._tag.toLowerCase().includes(term.toLowerCase()) || item.author.toLowerCase().includes(term.toLowerCase()) || item.title.toLowerCase().includes(term.toLowerCase()) || item.created_at.toLowerCase().includes(term.toLowerCase())) {
        return true
      }
      return false
    }
  }


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
