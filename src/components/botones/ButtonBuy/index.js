import React from "react";
import axios from "axios";

const ButtonBuy = ({ build }) => {
  const deleteWishList = async () => {
    await axios.delete(
      `${
        process.env.REACT_APP_LOCALHOST
      }/clasificados/user/${localStorage.getItem("userId")}/wish-list/item/${
        build.id
      }`
    );
    //window.location.reload();
  };

  const changeStatus = async () => {
    await axios.put(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${build.id}/status?status=sold`
    );
  };

  const buy = () => {
    deleteWishList();
    changeStatus();

    window.location.reload();
  };

  return (
    <div>
      <button onClick={buy}>Comprar</button>
    </div>
  );
};

export default ButtonBuy;
