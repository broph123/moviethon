import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SearchNominees from "./components/SearchNominees";
import NomineeList from "./components/NomineeList";
import NominatedList from "./components/NominatedList";

function App() {
  const [search, setSearch] = useState("");
  const [nominate, setNominate] = useState([]);

  const [movies, setMovies] = useState([]);
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

  useEffect(() => {
    const movieNominate = JSON.parse(localStorage.getItem("shoppies-nominate"));

    if (movieNominate) {
      setNominatedList(movieNominate);
    }
  }, []);

  const saveToLocalStorage = (item) => {
    localStorage.setItem("shoppies-nominate", JSON.stringify(item));
  };

  const nominateMovie = (movie) => {
    const newNomineeList = [...nominatedList, movie];
    setNominatedList(newNomineeList);
    const newNomineeImdb = [...nominate, movie.imdbID];
    setNominate(newNomineeImdb);
    // saveToLocalStorage(newNomineeList);
  };

  const removeNominee = (movie) => {
    const newNomineeList = nominatedList.filter(
      (nominee) => nominee.imdbID !== movie.imdbID
    );
    setNominatedList(newNomineeList);
    const newNomineeImdb = nominate.filter((item) => item !== movie.imdbID);
    setNominate(newNomineeImdb);
    // saveToLocalStorage(newNomineeList);
  };

  console.table(movies);

  return (
    <div>
      <nav className="center">
        <h1 style={{ paddingLeft: "10px" }}>The Shoppies</h1>
        <SearchNominees search={search} setSearch={setSearch} />
      </nav>

      {nominatedList.length > 4 ? (
        <div>
          <h1>Your Votes hav been counted</h1>
        </div>
      ) : (
        <div>
          <div className="movie-container">
            <NomineeList
              movies={movies}
              handleNominees={nominateMovie}
              nominate={nominate}
            />
          </div>

          <div className="nominated-list">
            <h2 style={{ display: "inline", marginLeft: "15px" }}>
              Nominated List
            </h2>
            <p style={{ display: "inline" }}> (Select up to 5) </p>
          </div>
          <div className="movie-container">
            <NominatedList
              movies={nominatedList}
              handleNominees={removeNominee}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
