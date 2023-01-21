import React from 'react'
import { useEffect, useState } from 'react'

import Button from '../../components/Button'

const Types = () => {

	const [ itemTypes, setItemTypes ] = useState([])

	useEffect(() => {
		fetch('http://localhost:8043/clasificados/item-types')
		.then(res=> res.json())
		.then(res=>{
			console.log(res)
			const { data } = res
			return setItemTypes(data)
		})
		.catch((error)=>{
			console.log(error)
		})
	}, [])

	return (
		<div>

			{ itemTypes.map(itemType=> <Button dataItem={ itemType } /> )}

		</div>
	)
}

export default Types