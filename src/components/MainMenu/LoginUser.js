import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import { promptError } from "../../shared/promptMessages";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";

import axios from "axios";

export function LoginUser() {
  const valueDefault = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(valueDefault);

  function storeInLocalStorage(token, userInfo) {
    localStorage.setItem("userToken", token);

    localStorage.setItem("userId", userInfo.id);

    localStorage.setItem("userName", userInfo.name);

    localStorage.setItem("tokenExpiration", userInfo.iat);
  }

  function goToMainPage() {
    window.location.replace("/");
  }

  const login = async (user) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_LOCALHOST}/clasificados/user/login?email=${user.email}&password=${user.password}`
      );

      const userToken = data.auth;

      const userInfo = jwt_decode(data.auth);

      storeInLocalStorage(userToken, userInfo);

      goToMainPage();
    } catch (error) {
      const { response } = error;

      if (response.status === 404) {
        promptError("el usuario no existe");
      }

      if (response.status === 403) {
        promptError("la contraseña no es correcta");
      }
    }
  };

  return (
    <>
      <div className={styles.containerImage}>
        <ToastContainer />
        <div className={styles.containerMain}>
          <form onSubmit={handleSubmit(login)} className={styles.formLoginUser}>
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
