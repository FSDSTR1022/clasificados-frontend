import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

// import style
import styles from "./buttonchangeprice.module.css";

const ButtonChangePrice = ({ build }) => {
  //elementos formulario
  const { register, handleSubmit } = useForm();
  const changePrice = async () => {
    await axios.put(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${build.id}/price?new_price=${newPrice.price}`
    );
  };

  let newPrice = 0;

  const onSubmit = (data) => {
    newPrice = data;
    changePrice();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
        <label>Precio</label>
        <input type="number" {...register("price")} />
        <button type="submit">Cambio Precio</button>
      </form>
    </div>
  );
};

export default ButtonChangePrice;
