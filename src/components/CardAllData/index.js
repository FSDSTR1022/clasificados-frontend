import React from "react";
import ButtonChangePrice from "../botones/ButtonChangePrice";
import ButtonChangeDeleted from "../botones/ButtonChangeDeleted";
import styles from "./CardAllData.module.css";
import { ToastContainer } from "react-toastify";

const CardAllData = ({
  ident,
  image,
  images, //estos es un array
  title,
  description,
  city,
  country,
  price,
  reduced_price,
  status,
}) => {
  let element = "";
  if (reduced_price !== null) {
    element = <p className={styles.cardRebaja}>Rebaja : {reduced_price} €</p>;
  } else {
    element = null;
  }
  return (
    <div className={styles.ContainerCardMyArticles}>
      <div className={styles.ContainerCard}>
        <img className={styles.mainImage} src={image} alt="Without Card " />

        <div className={styles.ContainerCardDetails}>
          <h3 className={styles.cardTitle}>{title}</h3>

          <span className={styles.cardDescription}>{description}</span>

          <div className={styles.containerValues}>
            <div className={styles.containerText}>
              <p className={styles.cardCity}>Ciudad : {city}</p>
              <p className={styles.cardCountry}>País : {country}</p>
              <p className={styles.cardValor}>Valor : {price} €</p>

              {element}
              {/* <p className={styles.cardRebaja}>Rebaja : {reduced_price} €</p> */}
            </div>

            <div className={styles.containerButtons}>
              <ToastContainer />
              <ButtonChangePrice build={ident} />
              <ButtonChangeDeleted build={ident} />
            </div>
          </div>
          <p className={styles.cardState}>Estatus : {status}</p>
        </div>
      </div>

      <div className={styles.cardImages}>
        <div className={styles.cardImagesMaps}>
          {images.map((data, index) => (
            <img
              className={styles.imagesCards}
              key={index}
              src={data}
              alt={`Imagen ${index} no encontrada`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardAllData;
