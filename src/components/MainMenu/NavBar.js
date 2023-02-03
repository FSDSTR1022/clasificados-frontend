import { Link } from 'react-router-dom'
import styles from '../MainMenu/NavBar.module.css'

export function NavBar() {
    return (

    <div className={styles.containerHeaderNavBar}>
        <div className={styles.containerNavBar}>
            <Link to='/' className={styles.navBarLink} >Inicio</Link>
            <Link to='misarticulos' className={styles.navBarLink}>Mis Articulos</Link>
            <Link to='bandejaentrada' className={styles.navBarLink}>Bandeja de Entrada</Link>
            <Link to='listadedeseos' className={styles.navBarLink}>Lista de deseos</Link>
            <Link to='vender' className={styles.navBarLink}>Vender</Link>
        </div>
    </div>

)
}
