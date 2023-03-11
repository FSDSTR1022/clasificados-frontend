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

  return (
    <div className={styles.ContainerCardMyArticles}>
    	<div className={styles.ContainerCard}>

			<img className={styles.mainImage} src={image} alt='Without Card ' />

			<div className={styles.ContainerCardDetails}>
				<h3 className={styles.cardTitle}>{title}</h3>

				<p className={styles.cardDescription}>{description}</p>

				<div className={styles.containerValues}>
					<p className={styles.cardCity}>Ciudad : {city}</p>
					<p className={styles.cardCountry}>País : {country}</p>
					<p className={styles.cardValor}>Valor : {price} €</p>
					<p className={styles.cardOferta}>Oferta : {reduced_price} €</p>
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