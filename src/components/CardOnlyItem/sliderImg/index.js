import React, { useState } from 'react';
import styles from "../sliderImg/slider.modules.css"

function SliderImg({ carImages, imagesPerPage }) {
    const [currentPage, setCurrentPage] = useState(1);

    // Función para mostrar las imágenes de la página actual
    function showImagesOnPage() {
        const startIndex = (currentPage - 1) * imagesPerPage;
        const endIndex = startIndex + imagesPerPage - 1;
        return carImages.slice(startIndex, endIndex + 1).map((url) => (
            <img src={url} key={url} />
        ));
    }



    // Calculamos el número total de páginas
    const totalPages = Math.ceil(carImages.length / imagesPerPage);

    // Calculamos el número de página de inicio y el número de página final
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    // Creamos un arreglo de números de página para mostrar en la paginación
    const pages = [...Array(endPage - startPage + 1).keys()].map((i) => startPage + i);

    return (
        <div className={styles.sld}>
           
            {showImagesOnPage()}
            <button disabled={currentPage === startPage} onClick={() => setCurrentPage(currentPage - 1)}>
                {"<"}</button>
            <button disabled={currentPage === endPage} onClick={() => setCurrentPage(currentPage + 1)}>
                {">"}
            </button>
        </div>
    );
}


export default SliderImg;