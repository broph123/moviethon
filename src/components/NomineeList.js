import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function NomineeList({ movies, handleNominees, nominate }) {
  const altPic = (ev) => {
    ev.target.src =
      "https://i.pcmag.com/imagery/reviews/02lLbDwVdtIQN2uDFnHeN41-11..1569480019.jpg";
  };

  return (
    <>
      {!movies ? (
        <div className="nom-loading">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        movies.map((movie) => (
          <div className="movies" key={movie.imdbID}>
            <img onError={altPic} src={movie.Poster} alt="movie"></img>
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
