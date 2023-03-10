import React from "react";
import axios from "axios";

const ButtonAddWishList = ({ build }) => {
  // en el archivo carditemlist el link, no deja que el button funcione correctamente
  const addWishList = async () => {
    await axios.post(
      `${
        process.env.REACT_APP_LOCALHOST
      }/clasificados/user/${localStorage.getItem("userId")}/wish-list/item/${
        build.props.id
      }`
    );
  };

  return (
    <div>
      <button onClick={addWishList}>Añadir Lista de Deseos</button>
    </div>
  );
};

export default ButtonAddWishList;
