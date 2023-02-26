import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import styles from './carditemlist.module.css'


const CardItemList = (constructor) => {
	return (
		
		<section className={styles.web}>


		<div className={styles.articulos}>
			<div id='carts'>
			<Card
  			direction={{ base: 'column', sm: 'row' }}
  			overflow='hidden'
  			variant='outline'
			  >
  		<Image className={styles.img}
    		objectFit='cover'
    		maxW={{ base: '100%', sm: '200px' }}
    		src={ constructor.props.main_image }
    		alt={ constructor.props.title }
			/>

				<Stack className={styles.descripcion}>
					<CardBody className={styles.carbody}>
						<Heading size='md' className={styles.head}>{ constructor.props.title }</	Heading>
				<div className={styles.text}>
					<div className={styles.textInfo}>
					
					</div>
					<div className={styles.precios}>
						<ul className={styles.precio}>
							<li>Precio:</li>
							<li>{ constructor.props.price }€</li>
						</ul>
					</div>
				</div>
					</CardBody>
				
					<CardFooter className={styles.footerCart}>
						<Button  variant='solid' colorScheme='orange' className={styles.button}>
							Añadir a lista deseos
						</Button>
					
					</CardFooter>
				</Stack>
			</Card>
			</div>
		</div>

			</section>
		
	)
}

export default CardItemList