import { navbars } from '../../components/MainMenu/external-file';
import { NavBar } from '../../components/MainMenu/NavBar';
import { ButtonsLogin } from '../../components/MainMenu/ButtonsLogin';

import styles from '../Header/header.module.css'

const Header = () => {
    
    return (
        <>
            <div className={styles.header}> 
                <span>LOGO</span>
                
                {navbars.map((navbar) => (
                    <NavBar 
                    key={navbar.id}
                    className={styles.menu}
                    option={navbar.optionMenu}
                    />
                    ))}
                <ButtonsLogin
                className={styles.ButtonsLoginUser} />
            </div>
    </>
)
}
export default Header;