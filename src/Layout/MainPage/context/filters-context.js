import React, { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersProvider(props) {
  const [filters, setFilters] = useState({
    search: null,
    minPrice: null,
    maxPrice: null,
    type: null,
    page: 1,
    pageSize: 25,
  });

  function updateFilters(newFilters) {
    setFilters({ ...filters, ...newFilters });
  }

  return (
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      {props.children}
    </FiltersContext.Provider>
  );
}
