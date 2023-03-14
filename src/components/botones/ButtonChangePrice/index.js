import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import changePrice from "../functions/changePrice";
import { promptError } from "../../../shared/promptMessages";

// import styles
import styles from "../../botones/buttonSelect.module.css";

const ButtonChangePrice = ({ build }) => {
  //elementos formulario
  const { register, handleSubmit } = useForm();
  const [item, setItem] = useState();

  //para no cambiar a un precio mayor al existente

  const fetchData = async () => {
    const data = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${build}`
    );
    setItem(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const currentPrice = item?.data?.price;

  let reducedPrice = 0;
  if (item?.data?.reduced_price === null) {
    reducedPrice = currentPrice;
  } else {
    reducedPrice = item?.data?.reduced_price;
  }

  const onSubmit = (data) => {
    let newPrice = data;
    let finalPrice = parseFloat(newPrice.price);
    let ident = `${build}`;
    if (finalPrice < currentPrice) {
      if (finalPrice >= reducedPrice) {
        promptError("el precio es mayor, que el ya reducido");
      } else if (finalPrice < reducedPrice) {
        changePrice(finalPrice, ident);
      }
    } else {
      promptError("el precio es mayor que el actual");
    }
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
