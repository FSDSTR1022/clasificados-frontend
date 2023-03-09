import { useState, useEffect } from "react";
// import Slider from 'react-slick';
// import  {baseUrl} from './cpnfig';

import CardAllData from "../../components/CardAllData";
import axios from "axios";

// import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
// import {RxDotFilled} from 'react-icons/rx'

export const MisArticulos = () => {
  const [items, setItems] = useState([]);

  async function fetchAllItemsByUser() {
    const { data } = await axios.get(
      "http://localhost:8043/clasificados/user/63dd6339c8dd060e29fc46e9/items"
    );

    return data;
  }

  useEffect(() => {
    async function fetchItemsUser() {
      const { data } = await fetchAllItemsByUser();
      console.log(data);
      setItems(data);
    }
    fetchItemsUser();
  }, []);

  return (
    <div className="m-auto w-1/2 pt-16">
      <p className="text-4xl text-gray-500 font-semibold">Mis Articulos</p>

      <div className="mx-8 pt-8 justify-items-center grid grid-cols-1 gap-4">
        {items.map((item) => {
          return (
            <CardAllData
              key={item.id}
              image={item.main_image}
              images={item.images}
              title={item.title}
              description={item.description}
              price={item.price}
              status={item.status}
            />
          );
        })}
      </div>
    </div>
  );
};
