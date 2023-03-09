import React from "react";

const CardAllData = ({
  image,
  images, //estos es un array
  title,
  description,
  price,
  reduced_price,
  status,
}) => {
  console.log("images", images);
  return (
    <div className="bg-slate-500 w-full h-[350px] rounded-t-lg cursor-pointer">
      <div className="flex rounded-t-lg bg-lime-700">
        <img
          className="bg-red-400 w-[250px] h-[250px] object-fit bg-contain rounded-tl-lg align-middle content-center justify-center"
          src={image}
          alt="without Card"
        />

        <div className="bg-gray-100 w-3/4 h-30 align-text-top rounded-tr-lg bg-gradient-to-l from-indigo-300 to-blue-100">
          <p className="text-md text-gray-700 font-300 first-letter:uppercase pt-4">
            {title}
          </p>
          <p className="text-sm text-gray-600 my-1 mx-8">{description}</p>

          <div className="flex justify-around">
            <p className="text-sm text-blue-500 mt-2 font-normal">
              Valor: {price} €
            </p>
            <p className="text-sm text-red-500 mt-2 font-normal">
              Oferta: {reduced_price} €
            </p>
          </div>

          <p className="flex my-2 text-xs font-normal ml-16 text-gray-600">
            Estado: {status}
          </p>
        </div>
      </div>

      {images.map((data) => (
        <img src={data} alt="otro" />
      ))}
      {/* <img
        className="bg-red-500 w-[100px] h-[100px] object-fit"
        src={images}
        alt="cual es esta?"
      /> */}
    </div>
  );
};
export default CardAllData;

/* <button className='border-solid border-spacing-2 border-slate-400 text-xs'>Cambiar Precio</button> */
