import React from "react";
import deleteWishList from "../functions/deleteWishList";

// importación estilos
import styles from "../buttonWithinSelect.module.css";

const ButtonDelete = ({ build, changeTgle }) => {
  const utility = async () => {
    await deleteWishList(`${build.id}`);
    changeTgle();
  };

  return (
    <div>
      <button className={styles.boton} onClick={utility}>
        Borrar
      </button>
    </div>
  );
};

export default ButtonDelete;
