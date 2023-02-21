import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../Pages/Vender.module.css'

export const Vender = () => {

	//elemento subir imagenes

	const [ image, setImage ] = useState()
	const [ url, setUrl ] = useState()

	const uploadImage = () => {

		const data = new FormData()

		data.append('file', image)
		data.append('upload_preset', 'clasificados')
		data.append('cloud_name', 'dhjelhzdd')

		fetch("https://api.cloudinary.com/v1_1/dhjelhzdd/image/upload", {
			method: 'post',
			body: data
		})
		.then(resp => resp.json())
		.then(data => setUrl(data.url))
		.catch(err => console.log(err))
	}

	//elemento para conseguir los types

	const [ types, setTypes ] = useState([])

	async function fetchType(){
		const { data } = await axios.get('http://localhost:8043/clasificados/item-types')
		return(data)
	}

	useEffect(() => {
		async function findTypes(){
			const typeName = await fetchType()
			setTypes(typeName)
		}
		findTypes()
	}, [])

	// console.log(typeof(types), 'tipo types')
	
	console.log(types, 'types')
	// console.log(types.data.map((item)=> console.log(item.name)), 'Item name')

	//Elementos subir elementos del formulario

	const valueItem = {
		country: '',
		city: '',
		owner_id: '',
		price: 0,
		type: '',
		title: '',
		description: '',
		images: []
	}

	const { register, handleSubmit, formState: {errors}, reset } = useForm(valueItem)

	const itemSubmit = data => {

		console.log(data, 'información enviada')

		axios.post('http://localhost:8043/clasificados/items', {
			country: data.country,
			city: data.city,
			owner_id: data.owner_id,
			price: data.price,
			type: types.data.find(({name}) => name === data.type).id,
			title: data.title,
			description: data.description,
			//debe de enviarse un array
			images: data.image
		})
		.then(function(res) {
			console.log(res)
		})
		.catch(function(err) {
			console.log(err)
		})

	reset()

	}

    return (
        <>

        <div className={styles.containerVender}>
					<form onSubmit={handleSubmit(itemSubmit)} className={styles.formSell} >

						<h2>Registro artículos</h2>

						<div>
							<label>País</label>
							<input type='text' {
								...register('country', {
									required: 'Es necesario indicar el país de origen'
								})
							} />

							{ errors.country && <span className={styles.fail}>{ errors.country.message }</span> }
						</div>

						<div>
							<label>Ciudad</label>
							<input type='text' {
								...register('city', {
									required: 'Es necesario indicar el ciudad de origen'
								})
							} />
						
							{ errors.city && <span className={styles.fail}>{ errors.city.message }</span> }
						</div>

						<div>
							{/* el owner debe de venir del localhost */}
							<label>Owner</label>
							<input type='text' {
								...register('owner_id', {
									required: 'Es necesario indicar el ciudad de origen'
								})
							} />

							{ errors.owner_id && <span className={styles.fail}>{ errors.owner_id.message }</	span> }
						</div>

						<div>
							<label>Precio</label>
							<input type='number' {
								...register('price', {
									required: 'Se debe de indicar el precio de origen'
								})
							} />
						
							{ errors.price && <span className={styles.fail}>{ errors.price.message }</	span> }
						</div>

						<div>
							{/* debe de transformarse en tipo select */}
							
							<label>Tipos</label>
							<select {...register('type')}>
								{ types.data?.map((item) =>(
									<option keys={item.id}>{item.name}</option>
								))}
								</select>
							
						</div>

						<div>
							<label>Titulo</label>
							<input type='text' {
								...register('title', {
									required: 'Hay que indicar un titulo para tu artículo'
								})
							} />

							{ errors.title && <span className={styles.fail}>{ errors.title.message }</span> }
						</div>

						<div>
							<label>Descripción</label>
							<input type='text' {
								...register('description', {
									required: 'Hay que indicar una descripción del artículo'
								})
							} />

							{ errors.description && <span className={styles.fail}>{ errors.description.message }</span> }
						</div>

						<div className='containerImg'>
							<label>Imágenes</label>
							<input type='file' onChange={(e) => setImage(e.target.files[0])} />
							<img src={url} alt={url} />

						</div>

						<button type='submit' onClick={uploadImage}>Vender</button>
						
					</form>

        </div>
        </>
    )
}