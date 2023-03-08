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

    const {data} = await axios.get('http://localhost:8043/clasificados/user/63dd6339c8dd060e29fc46e9/items');

    console.log(data);
    return data;
  }

  useEffect(() => {
    async function fetchItemsUser() {
      const {data} = await fetchAllItemsByUser();
      // console.log(data);
      setItems(data);
    }
    fetchItemsUser();
  }, []);

  function showDetailsCard() {
    console.log('He presionado la foto');
  }
  console.log(items);
  return (
      <div className="m-auto w-3/4 pt-14 pb-[380px]">
        <p className="text-4xl text-gray-500 font-semibold">Mis Articulos</p>

        <div className='pt-8 pb-[380px] justify-items-center grid grid-cols-1 gap-4'>
          {items.map((item) => (
            <CardAllData onClick={showDetailsCard}
              key={item.id}
              image={item.main_image}
              title={item.title}
              type={item.type}

              price={item.price}
              status={item.status}
            />
          ))}
      </div>
      </div>
);
};

/* <div className="absolute bg-sky-200 rounded-md top-20 right-6 w-[700px] h-[800px]"></div>
  <div className='relative bg-white'>
    <h2>lkhjsdfjkhjkhsdf</h2>

    title={item.title}
    price={item.price}
  </div> */

// type={item.type}
// low_price={item.reduced_price}
// description={item.description}
// status={item.status}
