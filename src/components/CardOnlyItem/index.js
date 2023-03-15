import styles from "./cardonlyitem.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//import componentes
import ButtonDelete from "../botones/ButtonDelete/index";
import ButtonBuy from "../botones/ButtonBuy/index";
import ButtonAddWishList from "../botones/ButtonAddWishList/index";

const Carditem = ({ constructor, changeToggle }) => {
  const [data, setData] = useState({});
  const { id } = useParams();

  let ident = "";

  async function fetchItemWithBuild() {
    ident = constructor.id;
    const { data } = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${constructor.id}`
    );
    return data;
  }

  async function fetchItem() {
    ident = id;
    const { data } = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/clasificados/item/${ident}`
    );
    return data;
  }

  const handleButton = () => {
    async function refresh() {
      const item = await fetchItem();
      setData({ ...item });
    }
    refresh();
  };

  // según si esta definido el id, obtenemos el id de maneras diferentes y según llegue, se realizza un tipo de fetch

  useEffect(() => {
    if (Object.entries(constructor).length === 0) {
      async function findItem() {
        const item = await fetchItem();
        setData({ ...item });
      }
      findItem();
    } else {
      async function findItemBuild() {
        const itemBuild = await fetchItemWithBuild();
        setData({ ...itemBuild });
      }
      findItemBuild();
    }
  }, []);

  let carImages = [];
  if (data?.images !== undefined) {
    data.images.forEach((element) => {
      carImages = [...carImages, element];
    });
  }

  // segun si esta definido el id, llegamos a esta tarjeta de diferentes lugares y entonces se debde de mostrar un componente u otro
  let component = "";

  if (id !== undefined) {
    component = <ButtonAddWishList build={data} />;
  } else {
    component = <ButtonDelete build={data} changeTgle={changeToggle} />;
  }

  // si existe precio reducido lo mostramos, si no existe no se muestra
  let element = "";
  if (data?.reduced_price !== null) {
    element = (
      <p className={styles.reduced_price}>
        <span>Reduced price </span> {data?.reduced_price}
      </p>
    );
  } else {
    element = null;
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
          {element}
        </div>
        <div className={styles.containerButton}>
          {component}
          <ButtonBuy build={data} changeTgle={handleButton} />
        </div>
      </div>
    </div>
  );
};

export default Carditem;
