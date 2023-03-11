import React from "react";
import axios from "axios";

// importación estilos
import styles from "../buttonWithinSelect.module.css";

const ButtonDelete = ({ build }) => {
  const deleteWishList = async () => {
    await axios.delete(
      `${
        process.env.REACT_APP_LOCALHOST
      }/clasificados/user/${localStorage.getItem("userId")}/wish-list/item/${
        build.id
      }`
    );
    window.location.reload();
  };

  return (
    <div>
      <button className={styles.boton} onClick={deleteWishList}>
        Delete
      </button>
    </div>
  );
};

export default ButtonDelete;
