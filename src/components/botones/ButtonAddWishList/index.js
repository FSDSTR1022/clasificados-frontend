import React from "react";
import axios from "axios";

// import styles
import styles from "../buttonWithinSelect.module.css";

const ButtonAddWishList = ({ build }) => {
  console.log("prueba", build);
  console.log("prueba2", build?.id);
  console.log("prueba3", build?.props?.id);

  let id = "";

  if (build?.id !== undefined) {
    id = build?.id;
  } else {
    id = build?.props?.id;
  }

  console.log("prueba4", id);

  const addWishList = async (e) => {
    e.preventDefault();

    await axios.post(
      `${
        process.env.REACT_APP_LOCALHOST
      }/clasificados/user/${localStorage.getItem(
        "userId"
      )}/wish-list/item/${id}`
    );
  };

  return (
    <div>
      <button className={styles.boton} onClick={addWishList}>
        Añadir Lista de Deseos
      </button>
    </div>
  );
};

export default ButtonAddWishList;
