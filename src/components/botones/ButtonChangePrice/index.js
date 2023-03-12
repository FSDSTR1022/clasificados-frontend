import React from "react";
import { useForm } from "react-hook-form";
import changePrice from "../functions/changePrice";

// import styles
import styles from "../../botones/buttonSelect.module.css";

const ButtonChangePrice = ({ build }) => {
  //elementos formulario
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let newPrice = data;
    let finalPrice = newPrice.price;
    let ident = `${build}`;
    changePrice(finalPrice, ident);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
        <input
          className={styles.containerLabel}
          type="number"
          {...register("price")}
        />
        <button className={styles.botton} type="submit">
          Cambio Precio
        </button>
      </form>
    </div>
  );
};

export default ButtonChangePrice;
