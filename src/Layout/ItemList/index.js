import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CardItemList from '../../components/CardItemList'

const ItemList = () => {

	const [ itemsList, setItemList ] = useState([])

	async function fetchItemList (){
		const { data } = await axios.get(
			"http://localhost:8043/clasificados/items?page=1&page_size=10"
		)
		console.log('aodfjaod', data)
		return data
	}

	useEffect(() => {
		async function retrieveItemList() {
			const { data } = await fetchItemList();
			setItemList(data);
		}
	
		retrieveItemList();
	}, []);

	return (

		<div>

			{ itemsList.map((item)=>(
				<CardItemList key={item.id} props={item}  />
			))}

		</div>
	)
}

export default ItemList