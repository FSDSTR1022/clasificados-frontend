import { Link } from "react-router-dom";
import styles from "../MainMenu/Navbar.module.css";

export const Navbar = () => {
  const navBarOptions = [
    {
      name: "Inicio",
      link: "/",
      public: true,
    },
    {
      name: "Mis Articulos",
      link: "/misarticulos",
      public: false,
    },
    {
      name: "Lista de deseos",
      link: "/listadedeseos",
      public: false,
    },
    {
      name: "Poner a la venta",
      link: "/vender",
      public: false,
    },
  ];

  function isTokenAvailable() {
    const token = localStorage.getItem("userToken");

    return token ? true : false;
  }

  function isEnabled(option) {
    if (option.public) {
      return true;
    } else {
      return isTokenAvailable();
    }
  }

  return (
    <>
      <div className={styles.containerHeaderNavbar}>
        <h2> Mercado @visos</h2>
        <div className={styles.containerNavbar}>
          {navBarOptions.map((option) => (
            <Link
              to={isEnabled(option) ? option.link : "/"}
              className={
                isEnabled(option)
                  ? styles.NavbarLink
                  : styles.NavbarLinkDisabled
              }
            >
              {option.name}
            </Link>
          ))}
        </div>

        <div className={styles.containerButtons}>
          <Link to="/user/login" className={styles.buttonLink}>
            Login
          </Link>
          <Link to="/user/register" className={styles.buttonRegister}>
            Register
          </Link>
        </div>
      </div>
    </>
  );
};
