import React from "react";
import { LinearProgress, Button } from "@material-ui/core";

function NominatedList({ movies, handleNominees }) {
  return (
    <>
      {movies.length > 4 ? (
        <div>
          <h3>Your votes have been sent to comittee</h3>
        </div>
      ) : (
        movies.map((movie) => (
          <div className="movies">
            <img src={movie.Poster} alt="movie"></img>
            <h2>{movie.Title}</h2>
            <button onClick={() => handleNominees(movie)}> Remove</button>
          </div>
        ))
      )}
    </>
  );
}

export default NominatedList;
