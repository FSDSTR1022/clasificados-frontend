import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { ItemType } from "../../components/ItemType";

import styles from "./itemtypelist.module.css";

const ItemTypesList = () => {
  const [itemTypes, setItemTypes] = useState([]);

  async function fetchItemTypes() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/item-types`
    );

    return data;
  }

  useEffect(() => {
    async function retrieveItemTypes() {
      const { data } = await fetchItemTypes();
      setItemTypes(data);
    }

    retrieveItemTypes();
  }, []);

  return (
    <div className={styles.mainContainer}>
      {itemTypes.map((itemType) => (
        <ItemType key={itemType.id} props={itemType} />
      ))}
    </div>
  );
};

export default ItemTypesList;
