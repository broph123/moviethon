import React from "react";
import { LinearProgress, Button } from "@material-ui/core";

function NomineeList({ movies, handleNominees }) {
  return (
    <>
      {!movies ? (
        <div>
          <h2>Search Your Nominees</h2>
        </div>
      ) : (
        movies.map((movie) => (
          <div className="movies">
            <img src={movie.Poster} alt="movie"></img>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <button onClick={() => handleNominees(movie)}> Nominate</button>
          </div>
        ))
      )}
    </>
  );
}

export default NomineeList;
