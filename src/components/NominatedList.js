import React from "react";

function NominatedList({ movies, handleNominees }) {
  return (
    <>
      {movies.length > 4 ? (
        <h1>Your Votes Have Been Submitted</h1>
      ) : (
        movies.map((movie) => (
          <div className="movies" key={movie.imdbID}>
            <img src={movie.Poster} alt="movie"></img>
            <p>{movie.Title}</p>
            <button onClick={() => handleNominees(movie)}> Remove</button>
          </div>
        ))
      )}
    </>
  );
}

export default NominatedList;
