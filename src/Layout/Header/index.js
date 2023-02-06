// import { navbars } from '../../components/MainMenu/external-file';
import { NavBar } from '../../components/MainMenu/NavBar';
import { ButtonsLogin } from '../../components/MainMenu/ButtonsLogin';
// import styles from '../../components/MainMenu/NavBar.module.css';
import styles from '../Header/header.module.css';

// dar el ancho max.del header!
function Header() {
    
    return (
    <>
        <div className={styles.containerHeader} styles={'position:fixed'}>
            <h2 className={styles.containerLogo}> Logo</h2>
            <NavBar />
            <ButtonsLogin/>
        </div>
    </>
    )
}
export default Header;

/* <NavBar />  */