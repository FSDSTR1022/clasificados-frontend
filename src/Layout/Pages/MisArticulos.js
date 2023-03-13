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
      }/clasificados/user/${localStorage.getItem("userId")}/items`
    );

    return data;
  }

  useEffect(() => {
    async function fetchItemsUser() {
      const { data } = await fetchAllItemsByUser();
      console.log(data);
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
            return (
              <CardAllData
                key={item.id}
                ident={item.id}
                image={item.main_image}
                images={item.images}
                title={item.title}
                description={item.description}
                city={item.location.city}
                country={item.location.country}
                price={item.price}
                reduced_price={item.reduced_price}
                status={item.status}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
