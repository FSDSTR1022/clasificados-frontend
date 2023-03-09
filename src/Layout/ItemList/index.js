import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CardItemList from "../../components/CardItemList";
import { FiltersContext } from "../MainPage/context/filters-context";
import { Link } from "react-router-dom";

import styles from "./itemlist.module.css";

const ItemList = () => {
  const { filters } = useContext(FiltersContext);

  const [itemsList, setItemList] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchItemList() {
    let url = `${process.env.REACT_APP_LOCALHOST}/clasificados/items?page=${filters.page}&page_size=${filters.pageSize}`;
    console.log(filters);

    if (filters.search) {
      url += `&search_words=${filters.search}`;
    }

    if (filters.type) {
      url += `&type=${filters.type}`;
    }

    const { data } = await axios.get(url);

    return data;
  }

  useEffect(() => {
    async function retrieveItemList() {
      const { data } = await fetchItemList();
      setItemList(data);
    }

    retrieveItemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className={styles.mainContainer}>
      {itemsList.map((item) => (
        <Link to={`/item/${item.id}`}>
          <CardItemList key={item.id} props={item} />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;
