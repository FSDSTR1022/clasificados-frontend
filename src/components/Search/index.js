import React, { useContext, useState } from "react";
import { FiltersContext } from "../../Layout/MainPage/context/filters-context.js";
import styles from "./search.module.css";

const Search = () => {
  const { updateFilters } = useContext(FiltersContext);
  const [searchInput, updateSearchInput] = useState();

  const priceOptions = [
    50, 100, 150, 200, 300, 400, 500, 600, 700, 800, 1000, 2000, 3000, 4000,
    5000, 10000, 20000, 30000, 50000, 100000,
  ];

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      updateFilters({ search: searchInput, page: 1 });
    }
  }

  function handleSearchButton() {
    updateFilters({ search: searchInput, page: 1 });
  }

  function handleMinPriceSelector(event) {
    if (priceOptions.includes(parseInt(event.target.value))) {
      updateFilters({ minPrice: event.target.value });
      return;
    }
    updateFilters({ minPrice: null });
  }

  function handleMaxPriceSelector(event) {
    if (priceOptions.includes(parseInt(event.target.value))) {
      updateFilters({ maxPrice: event.target.value });
      return;
    }
    updateFilters({ minPrice: null });
  }

  function clearFilters() {
    updateFilters({
      search: null,
      minPrice: null,
      maxPrice: null,
      type: null,
      page: 1,
    });

    const selectorsIds = ["minPrice", "maxPrice"];

    selectorsIds.forEach((selectorId) => {
      let selectElement = document.getElementById(selectorId);
      selectElement.selectedIndex = 0;
    });

    updateSearchInput("");
  }

  return (
    <div className={styles.buscador}>
      <select
        id="minPrice"
        className={styles.select}
        onChange={handleMinPriceSelector}
      >
        <option value="">Desde</option>
        {priceOptions.map((price) => (
          <option key={price} value={`${price}`}>
            {price}
          </option>
        ))}
      </select>

      <select
        id="maxPrice"
        className={styles.select}
        onChange={handleMaxPriceSelector}
      >
        <option value="">Hasta</option>
        {priceOptions.map((price) => (
          <option key={price} value={`${price}`}>
            {price}
          </option>
        ))}
      </select>

      <input
        value={searchInput}
        className={styles.input}
        onChange={(event) => {
          updateSearchInput(event.target.value);
        }}
        onKeyPress={handleKeyPress}
      ></input>
      <button className={styles.button} onClick={handleSearchButton}>
        Buscar
      </button>

      <button className={styles.button} onClick={clearFilters}>
        Borrrar
      </button>
    </div>
  );
};

export default Search;
