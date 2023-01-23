import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { ItemType } from "../../components/ItemType";


const ItemTypesList = () => {
  const [itemTypes, setItemTypes] = useState([]);

  async function fetchItemTypes() {
    const { data } = await axios.get(
      "http://localhost:8043/clasificados/item-types"
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
    <div>
      {itemTypes.map((itemType) => (
        <ItemType key={itemType.id} props={itemType} />
      ))}
    </div>
  );
};

export default ItemTypesList;
