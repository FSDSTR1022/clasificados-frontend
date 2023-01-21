import React from 'react'

const Button = ({ dataItem }) => {

	console.log('dataitem', dataItem)

	const { id, name } = dataItem

	return (
		<div>
			<button>
				<h1>{ name }</h1>
				<p>{ id }</p>
			</button>
			
		</div>
	)
}

export default Button