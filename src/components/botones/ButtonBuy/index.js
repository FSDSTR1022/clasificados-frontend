import React from "react";
import deleteWishList from "../functions/deleteWishList";
import changeStatusToSold from "../functions/changeStatusToSold";

// import styles
import styles from "../buttonWithinSelect.module.css";

const ButtonBuy = ({ build }) => {
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
