import { useState, useEffect } from "react";
import CardAllData from "../../components/CardAllData";
import axios from "axios";


export const MisArticulos = () => {
  const [items, setItems] = useState([]);

  async function fetchAllItemsByUser() {

    const data = await axios.get('http://localhost:8043/clasificados/user/63dd6339c8dd060e29fc46e9/items');
    console.log(data);
    return data;
  }

  useEffect(() => {
    async function fetchItemsUser() {
      const data = await fetchAllItemsByUser();
      console.log(data.data.data);
      setItems(data.data.data);
    }
    fetchItemsUser();
  }, []);
  
  return (
    <>
      <div className="bg-gray-300 w-full h-full space-y-20 grid gap-3 grid-cols-5 grid-rows-3">

        <p className="bg-lime-300 text-4xl text-orange-400 font-semibold h-10 text-center justify-center conten-center">Mis Articulos</p>

        {items.map((item) => (
          <CardAllData key={item.id}
          
          image={item.main_image}
          
          title={item.title}
          type={item.type}
          price={item.price}
          low_price={item.reduced_price}
          description={item.description}
          status={item.status}
          />
          ))}
        </div>
    </>
  );
};
