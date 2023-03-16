import React from "react";
import deleteWishList from "../functions/deleteWishList";
import changeStatusToSold from "../functions/changeStatusToSold";

// import styles
import styles from "../buttonWithinSelect.module.css";

const ButtonBuy = ({ build, changeTgle, refresh }) => {
  console.log("tog", changeTgle);
  const utility = async () => {
    await changeStatusToSold(`${build.id}`);
    //await deleteWishList(`${build.id}`);
    await refresh();
    changeTgle();
  };

  return (
    <div>
      <button
        disabled={build.status !== "available"}
        className={styles.boton}
        onClick={utility}
      >
        Comprar
      </button>
    </div>
  );
};

export default ButtonBuy;
