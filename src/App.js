import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SearchNominees from "./components/SearchNominees";
import NomineeList from "./components/NomineeList";
import NominatedList from "./components/NominatedList";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [nominatedList, setNominatedList] = useState([]);

  const getMovies = () => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setMovies(res.data.Search))
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    getMovies(search);
  }, [search]);

  const nominateMovie = (movie) => {
    const newNomineeList = [...nominatedList, movie];
    setNominatedList(newNomineeList);
  };

  const removeNominee = (movie) => {
    const newNomineeList = nominatedList.filter(
      (nominee) => nominee.imdbID !== movie.imdbID
    );
    setNominatedList(newNomineeList);
  };

  console.log(nominatedList);
  return (
    <div>
      <div className="center">
        <h1>The Shoppies</h1>
        <SearchNominees search={search} setSearch={setSearch} />
      </div>
      <div className="movie-container">
        <NomineeList movies={movies} handleNominees={nominateMovie} />
      </div>

      <div className="movie-container">
        <NominatedList movies={nominatedList} handleNominees={removeNominee} />
      </div>
    </div>
  );
}

export default App;

// Component that searches through the movie DB
// Shows the Movie
// Shows which movies have been nominated.
