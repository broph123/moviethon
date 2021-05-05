import React from "react";

function NomineeList({ movies, handleNominees, nominate }) {
  // const toggle = () => {
  //   setNominate(!nominate);
  // };

  return (
    <>
      {!movies || movies.length == 0 ? (
        <div className="vote-overlay">
          <h2>Vote for up to 5 Nominess</h2>
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
                UnNominate
              </button>
            )}
          </div>
        ))
      )}
    </>
  );
}

export default NomineeList;
