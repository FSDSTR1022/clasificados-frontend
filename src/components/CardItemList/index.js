import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'

const CardItemList = (constructor) => {
	return (
		<div>
			<Card
  			direction={{ base: 'column', sm: 'row' }}
  			overflow='hidden'
  			variant='outline'
			>
  		<Image
    		objectFit='cover'
    		maxW={{ base: '100%', sm: '200px' }}
    		src={ constructor.props.main_image }
    		alt={ constructor.props.title }
  		/>

				<Stack>
					<CardBody>
						<Heading size='md'>{ constructor.props.title }</	Heading>
				
						<Text py='2'>
							Caffè latte is a coffee beverage of Italian origin 	made 			with espresso
							and steamed milk.
						</Text>
						<ul>
							<li>Precio:</li>
							<li>{ constructor.props.price }€</li>
						</ul>
					</CardBody>
				
					<CardFooter>
						<Button variant='solid' colorScheme='blue'>
							Añadir a lista deseos
						</Button>
						<Button variant='solid' colorScheme='blue'>
							Añadir a carrito
						</Button>
					</CardFooter>
				</Stack>
			</Card>
		</div>
	)
}

export default CardItemList