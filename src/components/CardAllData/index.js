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

  const status = {
    available: "disponible",
    sold: "vendido",
    deleted: "borrado",
  };

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
      <div className={styles.ContainerCardDetails}>
        <div className={styles.ContainerHeaderCard}>
          <h3 className={styles.cardTitle}>{item?.data?.title}</h3>
          <span className={styles.cardDescription}>
            {item?.data?.description}
          </span>
        </div>

        <div className={styles.containerMidiumCard}>
          <div className={styles.containerValues}>
            <p className={styles.cardCity}>
              Ciudad : {item?.data?.location?.city}
            </p>
            <p className={styles.cardCountry}>
              País : {item?.data?.location?.country}
            </p>
            <p className={styles.cardValor}>Valor : {item?.data?.price} €</p>
            {element}
            <p className={styles.cardState}>
              Estado : {status[item?.data?.status]}
            </p>
          </div>

          <div className={styles.containerButtons}>
            <ToastContainer />
            <ButtonChangePrice
              className={styles.ButtonPrice}
              build={ident}
              changeTgle={handleToggle}
            />
            <ButtonChangeDeleted build={ident} changeTgle={toggle} />
          </div>
        </div>
      </div>

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
