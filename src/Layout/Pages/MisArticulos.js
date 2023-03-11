import { useState, useEffect } from "react";
import CardAllData from "../../components/CardAllData";
import axios from "axios";

import styles from './MisArticulos.module.css'

// import Slider from 'react-slick';
// import  {baseUrl} from './cpnfig';
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

  // "text-4xl text-gray-500 font-semibold">Mis Articulos</p>
  // "mx-8 pt-8 justify-items-center">
  return (
    <div className={styles.containerMain}>
      <div className={styles.MyArticles}>
        <h2 className={styles.title}>Mis Articulos</h2>
        <div className={styles.itemsMaps}>
          {items.map((item, index) => {
            return (
              <CardAllData 
              key={item.id}
              image={item.main_image}
              images={item.images}
              title={item.title}
              description={item.description}
              city={item.location.city}
              country={item.location.country}
              price={item.price}

              reduced_price={item.reduced_price}
  
              status={item.status}
              
              />
              );
            })}
        </div>
      </div>
    </div>
  );
};
