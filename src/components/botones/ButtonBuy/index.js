import React from "react";
import changeStatusToSold from "../functions/changeStatusToSold";
import styles from "../buttonWithinSelect.module.css";
import { ToastContainer } from "react-toastify";
import { promptSuccess } from "../../../shared/promptMessages";
import {
  isTokenAvailable,
  isTokenExpired,
} from "../../../shared/sessionManagement";

const ButtonBuy = ({ build, changeTgle, refresh }) => {
  function isAvailable() {
    return (
      isTokenAvailable() && !isTokenExpired() && build.status === "available"
    );
  }
  const utility = async () => {
    await changeStatusToSold(`${build.id}`);
    promptSuccess("Artículo comprado !");
    setTimeout(async () => {
      await refresh();
    }, 500);
  };

  return (
    <div>
      <ToastContainer />
      <button
        disabled={!isAvailable()}
        className={styles.boton}
        onClick={utility}
      >
        Comprar
      </button>
    </div>
  );
};

export default ButtonBuy;
