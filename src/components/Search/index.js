import React, { useContext, useState } from "react";
import { FiltersContext } from "../../Layout/MainPage/context/filters-context.js";
import styles from "./search.module.css";

const Search = () => {
  const { updateFilters } = useContext(FiltersContext);
/*
  <div className={styles.range}>
    <label>Filtro</label>
    <input type="range"></input>
  </div>;
*/
  const [searchInput, updateSearchInput] = useState();

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      updateFilters({ search: searchInput });
    }
  }

  return (
    <div className={styles.buscador}>
      <select className={styles.select}>
        <option>Precios</option>
        <option>Precio maximo</option>
        <option>Precio minimo</option>
      </select>

      <input className={styles.input}
        onChange={(event) => {
          updateSearchInput(event.target.value);
        }}
        onKeyPress={handleKeyPress}
      ></input>
      <button
        className={styles.button}
        onClick={() => {
          updateFilters({ search: searchInput });
        }}
      >
        Search
      </button>

      <button
        className={styles.button}
        onClick={() => {
          updateFilters({ search: searchInput });
        }}
      >
        X
      </button>
    </div>
  );
};

export default Search;
