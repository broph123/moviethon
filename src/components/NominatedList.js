import React from "react";

function NominatedList({ movies, handleNominees }) {
  return (
    <>
      {movies.map((movie) => (
        <div className="movies" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie"></img>
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          <div className="button">
            <button onClick={() => handleNominees(movie)}> Remove</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default NominatedList;
