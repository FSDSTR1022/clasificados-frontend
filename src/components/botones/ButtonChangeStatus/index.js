import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

//import styles
import styles from "../../botones/buttonSelect.module.css";

const ButtonChangeStatus = ({ build }) => {
  const changeStatus = async () => {
    await axios.put(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${build.id}/status?status=${statu.status}`
    );
  };

  const { register, handleSubmit } = useForm();

  let statu = "";

  const onSubmit = (data) => {
    statu = data;
    changeStatus();
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
      <select {...register("status")}>
        <option value="sold">Vendido</option>
        <option value="deleted">Eliminado</option>
      </select>
      <button className={styles.elementBoton} type="submit">
        Select
      </button>
    </form>
  );
};

export default ButtonChangeStatus;
