

import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
 import styles from './carditemlist.module.css'


const CardItemList = (constructor) => {
	return (
		
		<section className="web">


		<div id='articulos'>
			<div id='carts'>
			<Card
  			direction={{ base: 'column', sm: 'row' }}
  			overflow='hidden'
  			variant='outline'
			  >
  		<Image id='img'
    		objectFit='cover'
    		maxW={{ base: '100%', sm: '200px' }}
    		src={ constructor.props.main_image }
    		alt={ constructor.props.title }
			/>

				<Stack id='descripcion'>
					<CardBody id='carbody'>
						<Heading size='md' className='head'>{ constructor.props.title }</	Heading>
				<div id='text'>
					<div id='text-info'>
						<Text py='2'>
							Caffè latte is a coffee beverage of Italian origin 	made 			with espresso
							and steamed milk.
						</Text>
					</div>
					<div id='precios'>
						<ul id='precio'>
							<li>Precio:</li>
							<li>{ constructor.props.price }€</li>
						</ul>
					</div>
				</div>
					</CardBody>
				
					<CardFooter id='footer-cart'>
						<Button  variant='solid' colorScheme='orange' className='button'>
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