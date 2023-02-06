import { Link } from 'react-router-dom'
import styles from '../MainMenu/NavBar.module.css'

export const NavBar = () => {
    return (
    <>
        <div className={styles.containerHeaderNavBar}>
                <h2 className={styles.logo}>Mercado Avisos</h2>
                <div className={styles.containerNavBar}>
                    
                    <Link to="/" className={styles.navBarLink} >Inicio</Link>
                    <Link to="misarticulos" className={styles.navBarLink}>Mis Articulos</Link>
                    <Link to="bandejaentrada" className={styles.navBarLink}>Bandeja de Entrada</Link>
                    <Link to="listadedeseos" className={styles.navBarLink}>Lista de deseos</Link>
                    <Link to="vender" className={styles.navBarLink}>Vender</Link>
                </div>

                <div className={styles.containerButtons}>
                    <Link to="/user/login" className={styles.buttonLink}>Login</Link>
                    <Link to="/user/register" className={styles.buttonRegister}>Register</Link>
                </div>
        </div>
    </>

)
}
