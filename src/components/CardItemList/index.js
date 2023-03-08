import React from "react";
<<<<<<< HEAD
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
// import styles from './module.carditemlist.css'

const CardItemList = (constructor) => {
  return (
    <section className="web">
      <div id="articulos">
        <div id="carts">
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              id="img"
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={constructor.props.main_image}
              alt={constructor.props.title}
            />

            <Stack id="descripcion">
              <CardBody id="carbody">
                <Heading size="md" className="head">
                  {constructor.props.title}
                </Heading>
                <div id="text">
                  <div id="precios">
                    <ul id="precio">
                      <li>Precio:</li>
                      <li>{constructor.props.price}€</li>
                    </ul>
                  </div>
                </div>
              </CardBody>

              <CardFooter id="footer">
                <Button variant="solid" colorScheme="orange" className="button">
                  Añadir a lista deseos
                </Button>
                <Button variant="solid" colorScheme="orange" className="button">
                  Añadir a carrito
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </div>
      </div>
    </section>
  );
};

=======
import styles from "./carditemlist.module.css";
import axios from "axios";
const CardItemList = (constructor) => {
  async function setwishlist() {
    await axios.post(
      `${
        process.env.REACT_APP_LOCALHOST
      }/clasificados/user/${localStorage.getItem("userId")}/wish-list/item/${
        constructor.props.id
      }`
    );
  }
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
                </div>
              </div>
            </div>
            <footer className={styles.footerCart}>
              <button className={styles.button} onClick={setwishlist}>
                Añadir a lista deseos
              </button>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
};

>>>>>>> main
export default CardItemList;
