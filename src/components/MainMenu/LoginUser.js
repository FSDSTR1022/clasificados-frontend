import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { AiOutlineHome } from "react-icons/ai";
import jwt_decode from "jwt-decode";
import { Redirect } from "react-router-dom";

import axios from "axios";

// Validar que password y password 2 son identicas
export function LoginUser() {
  const valueDefault = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(valueDefault);

  const customSubmit = async (data) => {
    console.log(data);

    const result = await axios
      .get(
        `${process.env.REACT_APP_LOCALHOST}/user/login?email=${data.email}&password=${data.password}`
      )

      .then(function (response) {
        const user = jwt_decode(response.data.auth);
        let userToken = response.data.auth;
        localStorage.setItem("userToken", userToken);
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userName", user.name);
        window.location.replace("/");
      })
      .catch(function (error) {
        console.log(error);
      });

    reset();
  };

  return (
    <>
      <div className={styles.containerImage}>
        <div className={styles.containerMain}>
          <form
            onSubmit={handleSubmit(customSubmit)}
            className={styles.formLoginUser}
          >
            <h2>Login de Usuario</h2>

            <div className={styles.formControl}>
              <label>email</label>
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: "Error !... Debe ingresar el email !...",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Error !... email ingresado no es válido!...",
                    string: "",
                  },
                })}
              />

              {errors.email && (
                <span className={styles.fail}>{errors.email.message}</span>
              )}
            </div>

            <div className={styles.formControlPassword}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                {...register("password", {
                  required: "Error!... Debe ingresar la password !...",
                  minLength: {
                    value: 8,
                    message: "Mínimo 8 caracteres !...",
                    string: "",
                  },
                })}
              />

              {errors.password && (
                <span className={styles.fail}>{errors.password.message}</span>
              )}
            </div>

            <button type="submit">Enviar</button>
            <Link to="/" className={styles.backToHome}>
              <AiOutlineHome /> Volver a Inicio
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
/* </div> */
