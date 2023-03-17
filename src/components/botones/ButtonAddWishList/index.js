import React from "react";
import axios from "axios";
import { promptError, promptSuccess } from "../../../shared/promptMessages";
import { ToastContainer } from "react-toastify";

// import styles
import styles from "../buttonWithinSelect.module.css";
import {
  isTokenAvailable,
  isTokenExpired,
} from "../../../shared/sessionManagement";

const ButtonAddWishList = ({ build }) => {
  console.log(build);
  let id = "";
  let status = "";

  if (build?.id !== undefined) {
    id = build?.id;
    status = build?.status;
  } else {
    id = build?.props?.id;
    status = build?.props?.status;
  }

  function isAlreadyInWishList() {
    const wishList = localStorage.getItem("userWishList").split(",");
    return wishList.includes(id);
  }

  function updateLocalStorage() {
    const wishList = localStorage.getItem("userWishList");
    localStorage.setItem(
      "userWishList",
      wishList ? `${wishList},${id}` : `${id}`
    );
  }

  function redirectToMainPage() {
    if (window.location.pathname !== "/") {
      promptSuccess("Artículo añadido a tu lista de deseos");

      setTimeout(() => {
        window.location.replace("/");
      }, 700);

      return;
    }

    promptSuccess("Artículo añadido a tu lista de deseos");
  }

  async function handleClick(e) {
    e.preventDefault();
    if (isTokenAvailable() && !isTokenExpired()) {
      if (!isAlreadyInWishList() && status === "available") {
        await addWishList();
        updateLocalStorage();
        redirectToMainPage();
        return;
      } else {
        return status === "available"
          ? promptError("El artículo ya está en mi lista de deseos")
          : promptError("El artículo no se encuentra disponible");
      }
    }
    promptError(
      "Necesitas logearte para añadir el artículo a tu lista de deseos"
    );
  }

  async function addWishList() {
    await axios.post(
      `${
        process.env.REACT_APP_LOCALHOST
      }/clasificados/user/${localStorage.getItem(
        "userId"
      )}/wish-list/item/${id}`,
      null,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
  }

  return (
    <div>
      <ToastContainer />
      <button className={styles.botons} onClick={handleClick}>
        Añadir a tu lista de deseos
      </button>
    </div>
  );
};

export default ButtonAddWishList;
