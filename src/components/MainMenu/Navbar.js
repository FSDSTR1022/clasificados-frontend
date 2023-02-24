import { Link } from 'react-router-dom'
import styles from '../MainMenu/Navbar.module.css'

export const Navbar = () => {
    return (
    <>
        <div className={styles.containerHeaderNavbar}>
                <h2> Mercado @visos</h2>
                <div className={styles.containerNavbar}>
                    
                    <Link to="/" className={styles.NavbarLink} >Inicio</Link>
                    <Link to="/misarticulos" className={styles.NavbarLink}>Mis Articulos</Link>
                    <Link to="/bandejaentrada" className={styles.NavbarLink}>Bandeja de Entrada</Link>
                    <Link to="/listadedeseos" className={styles.NavbarLink}>Lista de deseos</Link>
                </div>

                <div className={styles.containerButtons}>
                    <Link to="/user/login" className={styles.buttonLink}>Login</Link>
                    <Link to="/user/register" className={styles.buttonRegister}>Register</Link>
                </div>
        </div>
    </>

)
}
