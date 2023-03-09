import React from "react";
import axios from "axios";

const ButtonAddWishList = ({ props }) => {
  const addWishList = async () => {
    await axios.post(
      `${process.env.REACT_APP_PORT}/clasificados/user/${props.owner_id}/wish-list/item/${props.id}`
    );
  };

  const print = () => {
    console.log("esta funcionando");
  };

  return (
    <div>
      {/* funciona, pero los props de owner.id y de props.id, aparecen como undefined */}
      <button onClick={addWishList}>Añadir Lista de Deseos</button>
    </div>
  );
};

export default ButtonAddWishList;
