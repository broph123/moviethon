import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import pic from "../images/noun_Movie_2524043.png";

function NomineeList({ movies, handleNominees, nominate }) {
  const altPic = (ev) => {
    ev.target.src = pic;
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
