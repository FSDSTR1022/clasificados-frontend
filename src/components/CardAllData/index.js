const CardAllData = ({ title, type, price, status, image }) => {

return (

<>
	<div className='bg-slate-200 w-32 h-28 rounded-t-md cursor-pointer'> 
		<img 
			className='w-32 h-28 object-fit rounded-t-md'
			src={image}
			alt='card Items'
		/>

		<div className='bg-sky-100 w-32 h-20 align-text-top rounded-b-md'>
			<p className='text-sm text-gray-500 font-semibold first-letter:uppercase'>{title}</p>
			<p className='text-sm text-gray-300'>{type}</p>
			<p className='text-sm text-lime-600 font-semibold'>Valor: {price} €</p>
			<p className='text-xs text-red-600 font-light'>Estado: {status}</p>
		</div>
	</div>
</>
	)
}

export default CardAllData