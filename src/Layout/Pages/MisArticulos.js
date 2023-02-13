import { useState, useEffect } from "react";
import styles from "../Pages/MisArticulos.module.css";
import axios from "axios";
import CardAllData from "../../components/CardAllData";

export const MisArticulos = () => {
  const [items, setItems] = useState([]);

	//pendiente hacer lógica coger id usuario de localstorage

  async function fetchAllItemsByUser() {
    const { data } = await axios.get(
      "http://localhost:8043/clasificados/user/63dd6339c8dd060e29fc46e9/items"
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
    <>
      <div className={styles.containerMisArticulos}>
        <h2>Page Mis Articulos</h2>
        {console.log(items)}
        {items.map((item) => (
          <CardAllData key={item.id} props={item} />
        ))}
      </div>
    </>
  );
};
