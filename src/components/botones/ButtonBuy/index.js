import React from "react";
import changeStatusToSold from "../functions/changeStatusToSold";
import styles from "../buttonWithinSelect.module.css";
import { ToastContainer } from "react-toastify";
import { promptSuccess } from "../../../shared/promptMessages";

const ButtonBuy = ({ build, changeTgle, refresh }) => {
  const utility = async () => {
    await changeStatusToSold(`${build.id}`);
    promptSuccess("Artículo comprado !");
    setTimeout(async () => {
      await refresh();
      changeTgle();
    }, 500);
  };

  return (
    <div>
      <ToastContainer />
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
