import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

//import style
import styles from "./buttonchangestatus.module.css";

const ButtonChangeStatus = ({ build }) => {
  const changeStatus = async () => {
    await axios.put(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${build.id}/status?status=${statu.status}`
    );
  };

  const { register, handleSubmit } = useForm();

  let statu = "";

  const onSubmit = (data) => {
    console.log("data", data);
    statu = data;
    changeStatus();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
      <label>Status</label>
      <select {...register("status")}>
        <option value="sold">Vendido</option>
        <option value="deleted">Eliminado</option>
      </select>
      <input type="submit" />
    </form>
  );
};

export default ButtonChangeStatus;
