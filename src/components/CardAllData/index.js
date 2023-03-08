import React from 'react'

const CardAllData = ({ image, title, type, price, status }) => {
	const showDetailsCard = () => {
		console.log('He presionado la Card');
	}
	return (
		
		<div onClick={ showDetailsCard } className='bg-lime-200 w-32 h-28 rounded-t-md cursor-pointer pb-[180px]'> 

		<img className='w-32 h-28 object-fit bg-contain rounded-t-md' src={image} alt='card Items' />

		<div className='bg-gray-300 w-32 h-30 align-text-top rounded-b-md'>
			<p className='text-xs text-gray-600 font-100 first-letter:uppercase py-2'>{title}</p>
			<p className='text-sm text-gray-500'>{type}</p>
			<p className='text-sm text-cyan-300 font-semibold'>Valor: {price} €</p>
			<p className='my-2 text-xs text-gray-100 font-light'>Estado: {status}</p>
		</div>

	</div>
	)
}
export default CardAllData
