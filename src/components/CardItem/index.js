import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./module.carditem.css";

const Carditem = ({ open, onClose, id }) => {
  const [data, setData] = useState([]);

  async function fetchItem() {
    const item = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/item/${id}`
    );
    return item;
  }

  useEffect(() => {
    async function findItem() {
      const Item = await fetchItem();
      setData(Item);
    }
    findItem();
  }, []);

  if (!open) return null;

  return (
    <div className="mainContainer">
      <h1 className="prueba">
        <p>{data.data?.title}</p>
        <p>{data.data?.description}</p>
        <p>{data.data?.city}</p>
        <p>{data.data?.country}</p>
        <p>{data.data?.price}</p>
        <p>{data.data?.status}</p>
        <p>{data.data?.reduced_price}</p>
      </h1>
      <p onClick={onClose}>X</p>
    </div>
  );
};

export default Carditem;
