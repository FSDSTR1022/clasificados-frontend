import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../Pages/ListaDeseos.module.css";
import CardOnlyItem from "../../components/CardOnlyItem/index";
import {
  isTokenExpired,
  clearCurrentSession,
  keepSessionActive,
} from "../../shared/sessionManagement";

export const ListaDeseos = () => {
  const [list, setList] = useState([]);

  async function fetchItemWishList() {
    const items = await axios.get(
      `${
        process.env.REACT_APP_LOCALHOST
      }/clasificados/user/${localStorage.getItem("userId")}/wish-list/items`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    return items;
  }

  useEffect(() => {
    async function fetchWishList() {
      const items = await fetchItemWishList();
      setList(items);
    }

    if (isTokenExpired()) {
      clearCurrentSession();
      window.location.replace("/user/login");
    }
    keepSessionActive();

    fetchWishList();
  }, []);

  return (
    <>
      <div className={styles.containerListaDeseos}>
        <h2>Page Lista de Deseos</h2>
        {list.data?.data?.map((item) => (
          <CardOnlyItem constructor={item} />
        ))}
      </div>
    </>
  );
};
