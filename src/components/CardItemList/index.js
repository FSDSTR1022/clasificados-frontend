import React from "react";
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
import { useState } from "react";
import CardItem from "../CardItem/index";

const CardItemList = (constructor) => {
  const [openModal, setOpenModal] = useState(false);

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
              <CardBody id="carbody" onClick={() => setOpenModal(true)}>
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
      <CardItem
        open={openModal}
        onClose={() => setOpenModal(false)}
        id={constructor.props.id}
      />
    </section>
  );
};

export default CardItemList;
