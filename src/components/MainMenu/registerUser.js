import { useForm } from "react-hook-form";
import styles from "./registerUser.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import { promptError } from "../../shared/promptMessages";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";

// Validar que password y password 2 son identicas

export function RegisterUser() {
  const valueDefault = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
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

    localStorage.setItem("tokenExpiration", userInfo.exp);
  }

  function goToMainPage() {
    window.location.replace("/");
  }

  async function createUser(user) {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_LOCALHOST}/clasificados/user/register`,
        {
          name: user.name,
          surname: user.lastname,
          email: user.email,
          password: user.password,
        }
      );
      const userToken = data.auth;

      const userInfo = jwt_decode(data.auth);

      storeInLocalStorage(userToken, userInfo);

      goToMainPage();
    } catch (error) {
      const { response } = error;

      if (response.status === 400) {
        promptError(
          "los campos no son correctos por favor revise que nombre, apellido, email i password son correctamente rellenados"
        );
      }

      if (response.status === 409) {
        promptError("el usuario ya está registrado");
      }
    }
  }

  return (
    <>
      <div className={styles.containerImage}>
        <ToastContainer />
        <div className={styles.containerMain}>
          <form
            onSubmit={handleSubmit(createUser)}
            className={styles.formRegister}
          >
            <h2>Registro de Usuario</h2>

            <div className={styles.formControl}>
              <label>Nombre</label>
              <input
                type="text"
                {...register("name", {
                  required: "Error !... Debe ingresar el nombre !",
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres !",
                    string: "",
                  },
                })}
              />

              {errors.name && (
                <span className={styles.fail}>{errors.name.message}</span>
              )}
            </div>

            <div className={styles.formControl}>
              <label>Apellido</label>
              <input
                type="text"
                {...register("lastname", {
                  required: "Error !... Debe ingresar el Apellido !",
                  minLength: {
                    value: 2,
                    message: "Mínimo 2 caracteres !",
                    string: "",
                  },
                })}
              />

              {errors.lastname && (
                <span className={styles.fail}>{errors.lastname.message}</span>
              )}
            </div>

            <div className={styles.formControlEmail}>
              <label>email</label>
              <input
                type="email"
                {...register("email", {
                  required: "Error !... Debe ingresar el email !",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Error !... email ingresado no es válido!",
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
                  required: "Error!... Debe ingresar la password !",
                  minLength: {
                    value: 8,
                    message: "Mínimo 8 caracteres !",
                    string: "",
                  },
                })}
              />

              {errors.password && (
                <span className={styles.fail}>{errors.password.message}</span>
              )}
            </div>

            <div className={styles.formControlPassword}>
              <label>Confirma Password</label>
              <input
                type="password"
                name="password2"
                {...register("password2", {
                  required: "Error !... Debe confirmar la password !",
                  minLength: {
                    value: 8,
                    message: "Mínimo 8 caracteres !",
                    string: "",
                  },
                })}
              />

              {errors.password2 && (
                <span className={styles.fail}>{errors.password2.message}</span>
              )}
            </div>

            <button  className={styles.botonRegistrar} type="submit">REGISTRAR</button>
            <Link to="/" className={styles.backToHome}>
              <AiOutlineHome /> Volver a Inicio
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
