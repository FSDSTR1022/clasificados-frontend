import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import styles from "./carditem.module.css";
import ButtonDelete from "../botones/ButtonDelete/index";

const Carditem = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  async function fetchItem() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${id}`
    );

    return data;
  }
  console.log("prueba", data);

  useEffect(() => {
    async function findItem() {
      const Item = await fetchItem();

      setData({ ...Item });
    }
    findItem();
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
            <img src={data?.main_image} alt="" className={styles.mainimage} />
            <div>
              {carImages.map((img, index) => (
                <img key={index} src={img} alt="" className={styles.img} />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.title}>{data?.title}</p>
          <label>Description</label>
          <p className={styles.description}>{data?.description}</p>
          <p className={styles.location}>
            <span>Location -</span> {data?.location?.city}
          </p>
          <p className={styles.country}>
            {" "}
            <span>Country - </span> {data?.location?.country}
          </p>
          <p className={styles.price}>
            {" "}
            <span>Price - </span> {data?.price} €
          </p>
          <p className={styles.status}>
            <span>Status -</span> {data?.status}
          </p>
          <p className={styles.reduced_price}>
            <span>Reduced price </span> {data?.reduced_price || "-"}
          </p>
        </div>
      </div>
      <ButtonDelete constructor={data} />
    </div>
  );
};

export default Carditem;
