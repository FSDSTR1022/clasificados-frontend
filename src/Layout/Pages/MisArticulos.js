import { useState, useEffect } from "react";
import CardAllData from "../../components/CardAllData";
import axios from "axios";

import styles from "./MisArticulos.module.css";

export const MisArticulos = () => {
  const [items, setItems] = useState([]);

  async function fetchAllItemsByUser() {
    const { data } = await axios.get(
      `${
        process.env.REACT_APP_LOCALHOST
      }/clasificados/user/${localStorage.getItem("userId")}/items`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );

    return data;
  }

  useEffect(() => {
    async function fetchItemsUser() {
      const { data } = await fetchAllItemsByUser();
      setItems(data);
    }
    fetchItemsUser();
  }, []);

  return (
    <div className={styles.containerMain}>
      <div className={styles.MyArticles}>
        <h2 className={styles.title}>Mis Articulos</h2>
        <div className={styles.itemsMaps}>
          {items.map((item, index) => {
            return <CardAllData key={item.id} ident={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
