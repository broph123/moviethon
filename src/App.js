import React, {useState, useEffect} from 'react'
import axios from 'axios'


import './App.css';


import SearchNominees from './components/SearchNominees'
import NomineeList from './components/NomineeList';

function App() {
  const [ movies, setMovies] =useState([])
  const [search, setSearch] = useState("")
  const [nominatedList, setNominatedList]=useState([])

  const getMovies = ()=>{
    axios
    .get(`http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(res =>setMovies(res.data.Search))
    .catch(err=>console.log(err.response))
  }
  
  useEffect(()=>{
    getMovies(search)
  },[search])
  


  const nominateMovie = (movie)=>{
    const newNomineeList = [...nominatedList,movie]
    setNominatedList(newNomineeList)
  }

  const removeNominee = (movie)=>{
    const newNomineeList = nominatedList.filter(
      (nominee)=>nominee.imdbID!==movie.imdbID
    )
    setNominatedList(newNomineeList)
  }

  

  console.log(nominatedList)
  return (
    <div className="App">
    
        
        <h1>Shoppies</h1>
        <SearchNominees search={search} setSearch = {setSearch}/>
        <NomineeList movies={movies} handleNominees={nominateMovie}/>
        <NomineeList movies={nominatedList} handleNominees={removeNominee}/>



        
    </div>
  );
}

export default App;

// Component that searches through the movie DB
// Shows the Movie
// Shows which movies have been nominated.

