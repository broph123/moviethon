import React from 'react'
import './App.css';
import SearchNominees from './components/SearchNominees'

function App() {
  

  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Shoppies</h1>
        <SearchNominees/>
        <div></div>
      </header>
    </div>
  );
}

export default App;

// Component that searches through the movie DB
// Shows the Movie
// Shows which movies have been nominated.

