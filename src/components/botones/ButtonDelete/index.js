import React from "react";
import axios from "axios";

// importación estilos
import styles from "./buttondelete.module.css";

const ButtonDelete = ({ constructor }) => {
  console.log("constructor", constructor);
  // const user = constructor.owner_id;
  // const itemId = constructor.id;

  const deleteWishList = async () => {
    await axios.delete(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/user/${constructor.owner.id}/wish-list/item/${constructor.id}`
    );
  };

  return (
    <div className={styles.mainContainer}>
      <button onClick={deleteWishList}>Delete</button>
    </div>
  );
};

export default ButtonDelete;
