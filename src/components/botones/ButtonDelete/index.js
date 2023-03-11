import React from "react";
import deleteWishList from "../functions/deleteWishList";

// importación estilos
import styles from "../buttonWithinSelect.module.css";

const ButtonDelete = ({ build }) => {
  const utility = () => {
    deleteWishList(`${build.id}`);
    window.location.reload();
  };

  return (
    <div>
      <button className={styles.boton} onClick={utility}>
        Delete
      </button>
    </div>
  );
};

export default ButtonDelete;
