import React from "react";
import styles from './CardAllData.module.css'

const CardAllData = (
	{
		image,
		images, //estos es un array
		title,
		description,
		city,
		country,
		price,
		reduced_price,
		status,
	}
	) => {

		//   console.log("images", images);

	// const estiloReducido = {
	// 	visibility:'hidden',
	// }

return (

<div className={styles.ContainerCardMyArticles}>
	<div className={styles.ContainerCard}>

		<img className={styles.mainImage} src={image} alt='Without Card ' />

		<div className={styles.ContainerCardDetails}>
			<h3 className={styles.cardTitle}>{title}</h3>

			<span className={styles.cardDescription}>{description}</span>

			<div className={styles.containerValues}>
				<p className={styles.cardCity}>Ciudad : {city}</p>
				<p className={styles.cardCountry}>País : {country}</p>
				<p className={styles.cardValor}>Valor : {price} €</p>

				<p className={styles.cardRebaja}>Rebaja : {reduced_price} €</p>

				{/* 				
				{
					reduced_price === null ? <p className='text-red-500' >Rebaja : {reduced_price} €</p> : <p className={styles.cardRebajaOculta}></p>
				} */}

				
				 {/* Dentro de este DIV pon la lógica de los botones */}
				{/* <div className={containerButtons}>  
					
				</div> */}
				
			</div>

			<p className={styles.cardState}>Estatus : {status}</p>
		</div>

	</div>

	<div className={styles.cardImages}>
		<div className={styles.cardImagesMaps}>
			{images.map((data, index) => (
				<img className={styles.imagesCards} key={index} src={data} alt={`Imagen ${index} no encontrada`} />
				))}
		</div>
	</div>
</div>
  );
};
export default CardAllData;