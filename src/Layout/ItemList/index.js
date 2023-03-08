import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardItemList from "../../components/CardItemList";
import { FiltersContext } from "../MainPage/context/filters-context";
import styles from "./itemlist.module.css";
import { promptError } from "../../shared/promptMessages";

const ItemList = ({ onTotalCountChange }) => {
  const { filters } = useContext(FiltersContext);

  const [itemsList, setItemList] = useState([]);

  function areFiltersCorrect() {
    if (filters.minPrice && filters.maxPrice) {
      if (!isPriceRangeCorrect()) {
        promptError("precio mínimo no puede ser superior al precio máximo");

        return false;
      }
    }
    return true;
  }

  function isPriceRangeCorrect() {
    return parseInt(filters.maxPrice) >= parseInt(filters.minPrice);
  }

  function createUrl() {
    let url = `${process.env.REACT_APP_LOCALHOST}/clasificados/items?page=${filters.page}&page_size=${filters.pageSize}`;

    if (filters.search) {
      url += `&search_words=${filters.search}`;
    }

    if (filters.type) {
      url += `&type=${filters.type}`;
    }

    if (filters.minPrice) {
      url += `&min_price=${filters.minPrice}`;
    }

    if (filters.maxPrice) {
      url += `&max_price=${filters.maxPrice}`;
    }

    return url;
  }

  function updateTotalCount(totalCount) {
    onTotalCountChange(totalCount);
  }

  async function fetchItemList() {
    const url = createUrl();

    const { data } = await axios.get(url);

    updateTotalCount(data.meta.totalCount);

    return data;
  }

  async function retrieveItemList() {
    if (areFiltersCorrect()) {
      try {
        const { data } = await fetchItemList();

        setItemList(data);
      } catch (error) {
        promptError(error.response.data.error.message);
      }
    }
  }

  useEffect(() => {
    retrieveItemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className={styles.mainContainer}>
      {itemsList.map((item) => (
        <CardItemList key={item.id} props={item} />
      ))}
      <ToastContainer />
    </div>
  );
};

export default ItemList;
