import { useState, useEffect } from "react";
import CardAllData from "../../components/CardAllData";
import axios from "axios";
import styles from "./MisArticulos.module.css";
import {
  clearCurrentSession,
  isTokenExpired,
  keepSessionActive,
} from "../../shared/sessionManagement";

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

  const handleButton = () => {
    async function fetchItemsUser() {
      const { data } = await fetchAllItemsByUser();
      setItems(data);
    }
    fetchItemsUser();
  };

  useEffect(() => {
    async function fetchItemsUser() {
      const { data } = await fetchAllItemsByUser();
      setItems(data);
    }
    if (isTokenExpired()) {
      clearCurrentSession();
      window.location.replace("/user/login");
    }

    keepSessionActive();

    fetchItemsUser();
  }, []);

  console.log("item", items);

  return (
    <div className={styles.containerMain}>
      <div className={styles.MyArticles}>
        <h2 className={styles.title}>Mis Articulos</h2>
        <div className={styles.itemsMaps}>
          {items.map((item, index) => {
            return (
              <CardAllData
                key={item.id}
                ident={item.id}
                toggle={handleButton}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
