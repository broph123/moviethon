import React from "react";

function NominatedList({ movies, handleNominees }) {
  return (
    <>
      {movies.map((movie) => (
        <div className="movies" key={movie.imdbID}>
          <img src={movie.Poster} alt="movie"></img>
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          <button onClick={() => handleNominees(movie)}> Remove</button>
        </div>
      ))}
    </>
  );
}

export default NominatedList;
