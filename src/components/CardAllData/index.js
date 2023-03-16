import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ButtonChangePrice from "../botones/ButtonChangePrice";
import ButtonChangeDeleted from "../botones/ButtonChangeDeleted";
import styles from "./CardAllData.module.css";
import { ToastContainer } from "react-toastify";

const CardAllData = ({ ident, toggle }) => {
  // axios para obtener item y refresh

  const [item, setItem] = useState();
  const [refresh, setToggle] = useState(true);

  const fetchItem = async () => {
    axios
      .get(`${process.env.REACT_APP_LOCALHOST}/clasificados/item/${ident}`)
      .then((res) => {
        setItem(res);
      });
  };

  const handleToggle = () => {
    setToggle(!refresh);
    console.log("funcionando");
  };

  useEffect(() => {
    fetchItem();
  }, [refresh]);

  // logica mostrar reduced_price
  let element = "";
  if (item?.data?.reduced_price !== null) {
    element = (
      <p className={styles.cardRebaja}>
        Rebaja : {item?.data?.reduced_price} €
      </p>
    );
  } else {
    element = null;
  }
  //----------------------------
  return (

    <div className={styles.ContainerCardMyArticles}>
      {/* <div className={styles.ContainerCard}> */}

        <div className={styles.ContainerCardDetails}>

          {/* Container Header Card */}
          <div className={styles.ContainerHeaderCard}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <span className={styles.cardDescription}>{description}</span>
          </div>

          {/* Container del medio */}
          <div className={styles.containerMidiumCard}> 

            <div className={styles.containerValues}>
                <p className={styles.cardCity}>Ciudad : {city}</p>
                <p className={styles.cardCountry}>País : {country}</p>
                <p className={styles.cardValor}>Valor : {price} €</p>
                {element}
                <p className={styles.cardState}>Estatus : {status}</p>
            </div>

            <div className={styles.containerButtons}>
              <ToastContainer />
              <ButtonChangePrice className={styles.ButtonPrice} build={ident} />
              <ButtonChangeDeleted build={ident} />
            </div>
          </div>
        </div>

      {/* </div> */}

      {/* Container end card */}
      <div className={styles.containerCardImages}>
        <div className={styles.cardImagesMaps}>
          {item?.data?.images.map((data, index) => (
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
