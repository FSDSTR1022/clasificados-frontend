import React from 'react'

const CardAllData = ({ props }) => {
	return (
		<>
			<h2>{props.title}</h2>
			<p>{props.type}</p>
			<p>{props.price}</p>
			<p>{props.description}</p>
			<p>{props.status}</p>
			<p>{props.images}</p>
		</>
	)
}

export default CardAllData