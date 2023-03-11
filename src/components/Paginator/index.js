import { useContext } from "react";
import { FiltersContext } from "../../Layout/MainPage/context/filters-context";
import styles from "./paginator.module.css";

export function Paginator({ totalCount }) {
  const { filters, updateFilters } = useContext(FiltersContext);
  const totalPages = (totalCount = 0
    ? 1
    : Math.ceil(totalCount / filters.pageSize));
  const startPage = Math.max(1, filters.page - 2);
  const endPage = Math.min(totalPages, filters.page + 2);
  const pages = [...Array(endPage - startPage + 1).keys()].map(
    (i) => startPage + i
  );

  function handleNextPage() {
    if (filters.page < totalPages) {
      updateFilters({ page: filters.page + 1 });
    }
  }

  function handlePreviousPage() {
    if (filters.page > 1) {
      updateFilters({ page: filters.page - 1 });
    }
  }

  function handlePageSizeChange(event) {
    updateFilters({ pageSize: event.target.value, page: 1 });
  }

  return (
    <div className={styles.container}>
      <button onClick={handlePreviousPage} disabled={filters.page === 1}>
        Anterior{" "}
      </button>
      <ul>
        {pages.map((p) => (
          <li
            key={p}
            className={filters.page === p ? styles.active : styles.inactive}
          >
            {p}
          </li>
        ))}
      </ul>
      <button onClick={handleNextPage} disabled={filters.page === totalPages}>
        Siguiente
      </button>
      <select value={filters.pageSize} onChange={handlePageSizeChange}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}
