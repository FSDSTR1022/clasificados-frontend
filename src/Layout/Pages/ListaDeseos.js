import { useState, useEffect } from "react";
import axios from "axios";

import styles from "../Pages/ListaDeseos.module.css";

// en los comentarios, se encuentra como hacer el camino, para tomar los datos

export const ListaDeseos = () => {
  const [list, setList] = useState([]);

  async function fetchItemWishList() {
    const items = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}user/${localStorage.getItem(
        "userId"
      )}/wish-list/items`
    );
    console.log("debug1", items);
    //console.log("debug1", items.data.data[0].description);
    return items;
  }

  useEffect(() => {
    async function fetchWishList() {
      const items = await fetchItemWishList();
      //console.log("debug2", items.data.data[0].title);
      setList(items);
    }
    fetchWishList();
  }, []);

  return (
    <>
      <div className={styles.containerListaDeseos}>
        {/* {console.log("debug3", list.data.data[0].owner_id)} */}
        <h2>Page Lista de Deseos</h2>
      </div>
    </>
  );
};
