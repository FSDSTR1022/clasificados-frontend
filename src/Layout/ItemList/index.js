import React, { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CardItemList from "../../components/CardItemList";
import { FiltersContext } from "../MainPage/context/filters-context";

const ItemList = () => {
  const { filters } = useContext(FiltersContext);

  const [itemsList, setItemList] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchItemList() {
    let url = `http://localhost:8043/clasificados/items?page=${filters.page}&page_size=${filters.pageSize}`;
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
			console.log('dataaaaaa', data)
      setItemList(data);
    }

    retrieveItemList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div>
      {itemsList.map((item) => (
        <CardItemList key={item.id} props={item} />
      ))}
    </div>
  );
};

export default ItemList;
