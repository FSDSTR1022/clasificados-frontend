import React from "react";
// import axios from "axios";

// import estilos
import styles from "./carditemlist.module.css";

// import componentes
import ButtonAddWishList from "../botones/ButtonAddWishList";

const CardItemList = (constructor) => {
  return (
    <section className={styles.web}>
      <div className={styles.articulos}>
        <div className={styles.descripcion}>
          <img
            className={styles.img}
            src={constructor.props.main_image}
            alt={constructor.props.title}
          ></img>
          <div className={styles.carbody}>
            <h1 className={styles.head}>{constructor.props.title}</h1>
            <div className={styles.text}>
              <div className={styles.textInfo}></div>
              <div className={styles.precios}>
                <div className={styles.precio}>
                  <div>Precio: {constructor.props.price}€</div>
                  <div>Oferta: {constructor.props.reduced_price}</div>
                </div>
              </div>
            </div>
            <footer className={styles.footerCart}>
              <ButtonAddWishList build={constructor} />
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardItemList;
