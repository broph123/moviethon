import React from "react";

function SearchNominees({ search, setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search Your Favorite Movies to Nominate"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </div>
  );
}

export default SearchNominees;
