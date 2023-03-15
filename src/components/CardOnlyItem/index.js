import styles from "./cardonlyitem.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
//import componentes
import ButtonDelete from "../botones/ButtonDelete/index";
import ButtonBuy from "../botones/ButtonBuy/index";
import SliderImg from "../CardOnlyItem/sliderImg";

const Carditem = ({ constructor }) => {
  const [data, setData] = useState({});
  const { id } = useParams();

  async function fetchItemWithBuild() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${constructor.id}`
    );
    return data;
  }

  async function fetchItem() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${id}`
    );

    return data;
  }

  useEffect(() => {
    if (Object.entries(constructor).length === 0) {
      async function findItem() {
        const item = await fetchItem();

        setData({ ...item });
      }
      findItem();
    } else {
      async function findItemBuild() {
        const itemBuild = await fetchItemWithBuild();
        setData({ ...itemBuild });
      }
      findItemBuild();
    }
  }, []);

  let carImages = [];
  if (data?.images !== undefined) {
    data.images.forEach((element) => {
      carImages = [...carImages, element];
    });
  }

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.productimgs}>
          <div className={styles.showcase}>
            <SliderImg carImages={carImages} imagesPerPage={1}></SliderImg>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.title}>{data?.title}</p>
          <label>Descripción</label>
          <p className={styles.description}>{data?.description}</p>
          <p className={styles.location}>
            <span>localización -</span> {data?.location?.city}
          </p>
          <p className={styles.country}>
            {" "}
            <span>País - </span> {data?.location?.country}
          </p>
          <p className={styles.price}>
            {" "}
            <span>Precio - </span> {data?.price} €
          </p>
          <p className={styles.status}>
            <span>Estatus -</span> {data?.status}
          </p>
          <p className={styles.reduced_price}>
            <span>Precios reducido </span> {data?.reduced_price || "-"}
          </p>
        <div>
          <ButtonBuy build={data} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Carditem;
