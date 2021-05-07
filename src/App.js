import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import SearchNominees from "./components/SearchNominees";
import NomineeList from "./components/NomineeList";
import NominatedList from "./components/NominatedList";

function App() {
  const [search, setSearch] = useState("downhill+racer");
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

  const nominateMovie = (movie) => {
    const newNomineeList = [...nominatedList, movie];
    setNominatedList(newNomineeList);
    const newNomineeImdb = [...nominate, movie.imdbID];
    setNominate(newNomineeImdb);
  };

  const removeNominee = (movie) => {
    const newNomineeList = nominatedList.filter(
      (nominee) => nominee.imdbID !== movie.imdbID
    );
    setNominatedList(newNomineeList);
    const newNomineeImdb = nominate.filter((item) => item !== movie.imdbID);
    setNominate(newNomineeImdb);
  };

  console.table(movies);

  return (
    <>
      {nominatedList.length > 4 ? (
        <div className="vote">
          <h1>
            Thank you for your votes. See you at the next Shoppies!! 🎉 🎉 🎉
          </h1>
        </div>
      ) : (
        <>
          <nav className="center">
            <h1 style={{ paddingLeft: "10px" }}>The Shoppies</h1>
            <SearchNominees search={search} setSearch={setSearch} />
          </nav>

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
              <p style={{ display: "inline" }}> (you have 5 votes) </p>
            </div>
            <div className="movie-container">
              <NominatedList
                movies={nominatedList}
                handleNominees={removeNominee}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
