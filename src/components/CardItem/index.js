import React from 'react'
import { useState, useEffect } from 'react'

import styles from './module.carditem.css'

const Carditem = ({ open, onClose, id }) => {

//crear el useEffect para contactar con el endpoint del backend, que me debe de devoler los datos del item y el useState para guardar los datos.

	if(!open) return null

	return (
		<div className='mainContainer'>
			<h1 className='prueba'>
				{ id }
				Carditem
			</h1>
			<p onClick={onClose} >X</p>
		</div>
	)
}

export default Carditem