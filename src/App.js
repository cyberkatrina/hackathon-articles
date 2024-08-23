import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import ListArticles from './ListArticles';

function App() {

  const [articles, setArticles] = useState([])
  const [searchTerm, setSearch] = useState('')

  useEffect(() => {
    fetch('https://hn.algolia.com/api/v1/search?tags=story')
        .then(response => {
          return response.json()
       }).then(arrayOfArticles => setArticles(arrayOfArticles.hits))
       .catch(error => console.error('Error fetching users:', error));
  }, []);


  const handleChange = (event) => {
    setSearch(event.target.value)
  }


  const filterSearch = () => {
    console.log(searchTerm)
    return (item) => {
      if (item.author.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.created_at.slice(0, 10).toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.url.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item._tags[0].toLowerCase().includes(searchTerm.toLowerCase())) {
        return true
      }
      return false
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <form>
          <input type='text' value={searchTerm} onChange={handleChange} placeholder='search by tag, date, author, or title'></input>
        </form>
      {
        searchTerm != "" ?
        <ListArticles articles={articles.filter(filterSearch())}/> :
        <ListArticles articles={articles}/>
      }
      </header>
    </div>
  );
}

export default App;
