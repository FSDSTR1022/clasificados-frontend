import React, { Component } from "react";

class Articulos extends Component {

    render() {
        return (

            <div class="center">
                <section id="content">
                    <h2 class="subheader">Lo más interesante</h2>


                    <div id="anuncios">
                        <article className="anuncio">
                            <div>
                                <img src="https://www.lacasadeldisco.es/23600-large_default/camiseta-negra-personalizable.jpg"
                                    alt="" />
                            </div>
                            <div class="anuncio-info">
                                <a href="#">Camiseta</a>
                                <p>Ropa y Moda</p>
                            </div>
                        </article>

                        <article className="anuncio">
                            <div>
                                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-11-pro-space-gray-2019_GEO_EMEA?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1611101535000"
                                    alt="" />
                            </div>
                            <div class="anuncio-info">
                                <a href="#">Iphone</a>
                                <p>Movil</p>
                            </div>
                        </article>
                        <article className="anuncio">
                            <div>
                                <img src="https://www.tradeinn.com/f/13810/138104500_3/adidas-zapatillas-running-eq21-run.jpg"
                                    alt="" />
                            </div>
                            <div class="anuncio-info">
                                <a href="#">Zapatillas de correr</a>
                                <p>Deporte</p>
                            </div>
                        </article>

                        <article className="anuncio">
                            <div>
                                <img src="https://contents.mediadecathlon.com/p2301224/k$3d81dad0fcd3707ac99c0008a0929486/sq/8775104.jpg?format=auto&f=800x0"
                                    alt="" />
                            </div>
                            <div class="anuncio-info">
                                <a href="#">Zapatillas</a>
                                <p>Ropa y Moda</p>
                            </div>
                        </article>

                        <article className="anuncio">
                            <div>
                                <img src="https://trek.scene7.com/is/image/TrekBicycleProducts/Marlin8_21_34649_A_Primary?$responsive-pjpg$&cache=on,on&wid=800&hei=600"
                                    alt="" />
                            </div>
                            <div class="anuncio-info">
                                <a href="#">Bicicleta</a>
                                <p>Deporte</p>
                            </div>
                        </article>

                        <article className="anuncio">
                            <div>
                                <img src="https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png"
                                    alt="" />
                            </div>
                            <div class="anuncio-info">
                                <a href="#">Portátil</a>
                                <p>Informática</p>
                            </div>
                        </article>

                        <article className="anuncio">
                            <div>
                                <img src="https://www.lg.com/es/images/television/md07551289/gallery/medium01.jpg" alt="" />
                            </div>
                            <div class="anuncio-info">
                                <a href="#">Tv</a>
                                <p>TV</p>
                            </div>
                        </article>

                        <article className="anuncio">
                            <div>
                                <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-finish-unselect-gallery-2-202212_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1667594383218"
                                    alt="" />
                            </div>
                            <div class="anuncio-info">
                                <a href="#">Ipad</a>
                                <p>Informática</p>
                            </div>
                        </article>

                        <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

                    </div>
                </section>
            </div>
                )
    }

}

                export default Articulos