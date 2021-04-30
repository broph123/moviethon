import React, {useState, useEffect} from 'react'
import axios from 'axios'


import './App.css';
import {Container, Grid, Grow} from '@material-ui/core'


import SearchNominees from './components/SearchNominees'
import NomineeList from './components/NomineeList';
import NominatedList from './components/NominatedList';

function App() {
  const [ movies, setMovies] =useState([])
  const [search, setSearch] = useState("")
  const [nominatedList, setNominatedList]=useState([])
  const [nominate, setNominate] = useState(false)

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
    setNominate(true)
  }

  const removeNominee = (movie)=>{
    const newNomineeList = nominatedList.filter(
      (nominee)=>nominee.imdbID!==movie.imdbID
    )
    setNominatedList(newNomineeList)
    
  }

  

  console.log(nominatedList)
  return (
    <Container maxWidth="lg">
      <h1>Shoppies</h1>
      <SearchNominees search={search} setSearch = {setSearch}/>

      <Grow in>
        <Container>
          <Grid container justify="space-around" alignItems="stretch" spacer={3}>
            <Grid item xs={12} sm={7}>
              <NomineeList movies={movies} handleNominees={nominateMovie} nominate={nominate}/>
              </Grid>
              <Grid item xs={12} sm={4}>
          <NominatedList nominated={nominatedList} handleNominees={removeNominee}/>
        </Grid>
          </Grid>
        </Container>
      </Grow>
       </Container>
  
    
  );
}

export default App;

// Component that searches through the movie DB
// Shows the Movie
// Shows which movies have been nominated.

