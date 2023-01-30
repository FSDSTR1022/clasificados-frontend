import React from 'react'
import styles from './module.search.css'

const Search = () => {
	return (
		<div id='buscador'>


			<div className='range'>
				<label>Filtro</label>
				<input type='range' ></input>
			</div>


			<input></input>
			<button id='button'>Search</button>

			<button id='clear'>clear</button>



		</div>




	)
}

export default Search