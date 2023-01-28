import React, { useContext, useState } from "react";
import { FiltersContext } from "../../Layout/MainPage/context/filters-context.js";
import styles from "./module.search.css";

const Search = () => {
  const { updateFilters } = useContext(FiltersContext);

  const [searchInput, updateSearchInput] = useState();

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      updateFilters({ search: searchInput });
    }
  }

  return (
    <div id="buscador">
      <select id="select">
        <option>Precios</option>
        <option>Precio maximo</option>
        <option>Precio minimo</option>
      </select>

      <input
        onChange={(event) => {
          updateSearchInput(event.target.value);
        }}
        onKeyPress={handleKeyPress}
      ></input>
      <button
        id="button"
        onClick={() => {
          updateFilters({ search: searchInput });
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
