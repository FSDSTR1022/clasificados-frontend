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
      <div className={styles.ContainerCard}>
        <img
          className={styles.mainImage}
          src={item?.data?.main_image}
          alt="Without Card "
        />

        <div className={styles.ContainerCardDetails}>
          <h3 className={styles.cardTitle}>{item?.data?.title}</h3>

          <span className={styles.cardDescription}>
            {item?.data?.description}
          </span>

          <div className={styles.containerValues}>
            <div className={styles.containerText}>
              <p className={styles.cardCity}>
                Ciudad : {item?.data?.location?.city}
              </p>
              <p className={styles.cardCountry}>
                País : {item?.data?.location?.country}
              </p>
              <p className={styles.cardValor}>Valor : {item?.data?.price} €</p>

              {element}
            </div>

            <div className={styles.containerButtons}>
              <ToastContainer />
              <ButtonChangePrice build={ident} changeTgle={handleToggle} />
              <ButtonChangeDeleted build={ident} changeTgle={toggle} />
            </div>
          </div>
          <p className={styles.cardState}>Estatus : {item?.data?.status}</p>
        </div>
      </div>

      <div className={styles.cardImages}>
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
