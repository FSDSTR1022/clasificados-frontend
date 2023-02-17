import React from 'react'
import styles from './module.carditem.css'

const CardItem = ({open, date}) => {
	//if(!open) return null
	return (
		<div>
			<h1>{date}</h1>
		</div>
	)
}

export default CardItem