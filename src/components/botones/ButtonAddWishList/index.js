import React from "react";
import axios from "axios";

// import styles
import styles from "../buttonWithinSelect.module.css";

const ButtonAddWishList = ({ build }) => {
  let id = "";

  if (build?.id !== undefined) {
    id = build?.id;
  } else {
    id = build?.props?.id;
  }

  const addWishList = async (e) => {
    e.preventDefault();

    await axios.post(
      `${
        process.env.REACT_APP_LOCALHOST
<<<<<<< HEAD
      }/clasificados/user/${localStorage.getItem(
        "userId"
      )}/wish-list/item/${id}`
=======
      }/clasificados/user/${localStorage.getItem("userId")}/wish-list/item/${
        build.props.id
      }`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
>>>>>>> main
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
