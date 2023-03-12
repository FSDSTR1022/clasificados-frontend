import React from "react";
import { useForm } from "react-hook-form";
import changeStatus from "../functions/changeStatus";

//import styles
import styles from "../../botones/buttonSelect.module.css";

const ButtonChangeStatus = ({ build }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let newStatus = data;
    let finalStatus = newStatus.status;
    let ident = `${build}`;
    changeStatus(finalStatus, ident);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
      <select className={styles.containerSelection} {...register("status")}>
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
