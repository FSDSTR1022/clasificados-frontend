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
    const item = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${id}`
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
    <div className={styles.mainContainer}>
      <h1 className={styles.prueba}>
        <p>{data?.title}</p>
        <p>{data?.description}</p>
        <p>{data?.location?.city}</p>
        <p>{data?.location?.country}</p>
        <p>{data?.price}</p>
        <p>{data?.status}</p>
        <p>{data?.reduced_price || "-"}</p>
        <img src={data?.main_image} alt="" />
        {carImages.map((img, index) => (
          <img key={index} src={img} alt="" />
        ))}
      </h1>
      <button></button>
    </div>
  );
};

export default Carditem;
