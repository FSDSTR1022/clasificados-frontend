import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Pages/Vender.module.css";

export const Vender = () => {
  //elemento subir imagenes

  const [image, setImage] = useState([]);
  const [url, setUrl] = useState([]);

  const multipleUpload = async () => {
    let tempUrl = [];
    for (let i = 0; i < image.length; i++) {
      const result = await uploadImage(image[i]);
      tempUrl = [...tempUrl, result];
    }
    setUrl(tempUrl);
    console.log("hemos subido imagenes", url);
  };

  const uploadImage = async (image) => {
    const data = new FormData();

    data.append("file", image);
    data.append("upload_preset", "nuclio");
    data.append("cloud_name", "dhjelhzdd");

    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dhjelhzdd/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const jsonResult = await result.json();
    return jsonResult.secure_url;
  };

  //elemento para conseguir los types

  const [types, setTypes] = useState([]);

  async function fetchType() {
    const { data } = await axios.get(
      `${process.env.REACT_APP_LOCALHOST}/item-types`
    );
    return data;
  }

  useEffect(() => {
    async function findTypes() {
      const typeName = await fetchType();
      setTypes(typeName);
    }
    findTypes();
  }, []);

  console.log("tipos", types);

  //Elementos subir elementos del formulario

  const valueItem = {
    country: "",
    city: "",
    owner_id: "",
    price: 0,
    type: "",
    title: "",
    description: "",
    images: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(valueItem);

  const itemSubmit = async (data) => {
    axios
      .post(`${process.env.REACT_APP_LOCALHOST}/items`, {
        country: data.country,
        city: data.city,
        owner_id: localStorage.getItem("userId"),
        price: data.price,
        type: types.data.find(({ name }) => name === data.type).id,
        title: data.title,
        description: data.description,
        images: url,
      })
      .then(function (res) {
        setUrl([]);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });

    reset();
  };

  return (
    <>
      <h1 className={styles.title}>{localStorage.getItem("userName")}</h1>
      <div className={styles.containerVender}>
        <form onSubmit={handleSubmit(itemSubmit)} className={styles.formSell}>
          <h2>Registro artículos</h2>

          <div className={styles.pais}>
            <label className={styles.medTitle}>País</label>
            <input
              type="text"
              {...register("country", {
                required: "Es necesario indicar el país de origen",
              })}
            />

            {errors.country && (
              <span className={styles.fail}>{errors.country.message}</span>
            )}
          </div>

          <div className={styles.ciudad}>
            <label className={styles.medTitle}>Ciudad</label>
            <input
              type="text"
              {...register("city", {
                required: "Es necesario indicar el ciudad de origen",
              })}
            />

            {errors.city && (
              <span className={styles.fail}>{errors.city.message}</span>
            )}
          </div>

          <div className={styles.precio}>
            <label className={styles.medTitle}>Precio</label>
            <input
              type="number"
              {...register("price", {
                required: "Se debe de indicar el precio de origen",
              })}
            />

            {errors.price && (
              <span className={styles.fail}>{errors.price.message}</span>
            )}
          </div>

          <div className={styles.tipos}>
            <label className={styles.medTitle}>Tipos</label>
            <select {...register("type")}>
              {types.data?.map((item) => (
                <option keys={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

          <div className={styles.titulo}>
            <label className={styles.medTitle}>Titulo</label>
            <input
              type="text"
              {...register("title", {
                required: "Hay que indicar un titulo para tu artículo",
              })}
            />

            {errors.title && (
              <span className={styles.fail}>{errors.title.message}</span>
            )}
          </div>

          <div className={styles.descripcion}>
            <label className={styles.medTitle}>Descripción</label>
            <input
              type="text"
              {...register("description", {
                required: "Hay que indicar una descripción del artículo",
              })}
            />

            {errors.description && (
              <span className={styles.fail}>{errors.description.message}</span>
            )}
          </div>
          <button type="submit">Vender</button>
        </form>

        <div className={styles.imagenes}>
          <h3 className={styles.medTitle}>Imágenes</h3>
          <input
            type="file"
            onChange={(e) => {
              setImage([...e.target.files]);
            }}
            multiple
          />

          {url.map((image, index) => (
            <img key={index} src={image} alt="" />
          ))}

          <button onClick={multipleUpload}>Cargar imágenes</button>
        </div>
      </div>
    </>
  );
};
