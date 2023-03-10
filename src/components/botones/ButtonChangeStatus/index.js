import React from "react";
import { useForm } from "react-hook-form";

//import style
import styles from "./buttonchangestatus.module.css";

const ButtonChangeStatus = () => {
  const { register, handleSubmit } = useForm();

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
