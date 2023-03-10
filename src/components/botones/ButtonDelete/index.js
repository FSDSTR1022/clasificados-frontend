import React from "react";
import axios from "axios";

// importación estilos
import styles from "./buttondelete.module.css";

const ButtonDelete = ({ build }) => {
  // console.log("constructor", build);
  // console.log("user", build.owner_id);
  // const itemId = constructor.id;

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

  const print = () => {
    console.log("esta funcionando");
  };

  return (
    <div className={styles.mainContainer}>
      <button onClick={deleteWishList}>Delete</button>
    </div>
  );
};

export default ButtonDelete;
