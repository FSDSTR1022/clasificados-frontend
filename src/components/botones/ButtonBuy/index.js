import React from "react";
import axios from "axios";
import deleteWishList from "../functions/deleteWishList";
import changeStatusToSold from "../functions/changeStatusToSold";

// import styles
import styles from "../buttonWithinSelect.module.css";

const ButtonBuy = ({ build }) => {
  /*   const deleteWishList = async () => {
    await axios.delete(
      `${
        process.env.REACT_APP_LOCALHOST
      }/clasificados/user/${localStorage.getItem("userId")}/wish-list/item/${
        build.id
      }`
    );
    //window.location.reload();
  }; */

  /*   const changeStatusToSold = async () => {
    await axios.put(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${build.id}/status?status=sold`
    );
  }; */

  const utility = () => {
    deleteWishList(`${build.id}`);
    changeStatusToSold(`${build.id}`);

    window.location.reload();
  };

  return (
    <div>
      <button className={styles.boton} onClick={utility}>
        Comprar
      </button>
    </div>
  );
};

export default ButtonBuy;
