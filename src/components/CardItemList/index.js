
import React from 'react';

import CardItem from '../CardItem/index'
import styles from './module.carditemlist.css'

const CardItemList = (constructor) => {
	return (
		<>
		<div>
			<button onClick={()=>console.log('pruebassss')} className='container'>
				<aside className='image'>
					<img src={constructor.props.main_image} alt={constructor.props.title} />
				</aside>

				<section className='containerMain'>
					<div className='main'>
						<h2>{ constructor.props.title }</h2>
						<p>{ constructor.props.description }</p>
						<div className='precio'>
							<ul>
								<li>Precio:</li>
								<li>{ constructor.props.price }</li>
								<li>{ constructor.props.reduced_price }</li>
							</ul>
						</div>
					</div>

					<footer className='buttons'>
						<button>Añadir lista de deseos</button>
					</footer>
				</section>
			</button>
		</div>
			<CardItem date={constructor.props.id}/>
		</>
	)
}

export default CardItemList