import React from 'react'
import styles from './module.search.css'

const Search = () => {
	return (
		<div id='buscador'>

			<select id='select'>
				<option>Precios</option>
				<option>Precio maximo</option>
				<option>Precio minimo</option>
			</select>

			<input></input>
			<button id='button'>Search</button>

		</div>
	)
}

export default Search