import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';


function App() {
  

  const getGodfather = ()=>{
    axios
    .get(`http://www.omdbapi.com/?t=The+Godfather&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(res =>console.log(res.data))
    .catch(err=>console.log(err.response))
  }

  useEffect(()=>{
    getGodfather();
  },[])


  return (
    <div className="App">
      <header className="App-header">
        Shoppies
        <div></div>
      </header>
    </div>
  );
}

export default App;

// Component that searches through the movie DB
// Shows the Movie
// Shows which movies have been nominated.

