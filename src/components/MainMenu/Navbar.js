import { Link } from "react-router-dom";
import styles from "../MainMenu/Navbar.module.css";
import {FaBars} from 'react-icons/fa'


export const Navbar = () => {
  const navBarOptions = [
    {
      id:1,
      name: "Inicio",
      link: "/",
      public: true,
    },
    {
      id:2,
      name: "Mis Articulos",
      link: "/misarticulos",
      public: false,
    },
    {
      id:3,
      name: "Lista de deseos",
      link: "/listadedeseos",
      public: false,
    },
    {
      id:4,
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
  

  // Continuar con la lógica del menu aquí
  // const menuHamburguesa = (event)=> {
  //   const clickHamburger = 
  // }

  //   console.log(clickHamburger);

  // key={option.id}

  return (
    <>
      <div className={styles.containerHeaderNavbar}>
        <div className={styles.logo}>Mercado @visos</div>

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

        <div className={styles.containerIcons}>
          < FaBars/> 
        </div>
      </div>
    </>
  );
};
