import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import styles from "./carditem.module.css";

const Carditem = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  console.log(id, "id de url");

  async function fetchItem() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}item/${id}`
    );

    return data;
  }

  useEffect(() => {
    async function findItem() {
      const Item = await fetchItem();

      setData({ ...Item });
    }
    findItem();
  }, []);

  let carImages = [];
  console.log("images", data?.images);
  if (data?.images !== undefined) {
    data.images.forEach((element) => {
      console.log("imassssssss", element);
      carImages = [...carImages, element];
    });
  }

  console.log("prueba", carImages);

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
        <button></button>
      </div>
    </div>
  );
};

export default Carditem;
