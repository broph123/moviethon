import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function NomineeList({ movies, handleNominees, nominate }) {
  return (
    <>
      {!movies ? (
        <div className="vote">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        movies.map((movie) => (
          <div className="movies" key={movie.imdbID}>
            <img src={movie.Poster} alt="movie"></img>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
            {!nominate.includes(movie.imdbID) ? (
              <button
                onClick={() => {
                  handleNominees(movie);
                }}
              >
                Nominate
              </button>
            ) : (
              <button disabled={nominate} onClick={() => handleNominees(movie)}>
                Nominated
              </button>
            )}
          </div>
        ))
      )}
    </>
  );
}

export default NomineeList;
