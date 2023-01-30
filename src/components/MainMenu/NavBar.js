import styles from '../MainMenu/NavBar.module.css'

export function NavBar({option}) {
    return (

    <div className={styles.containerHeaderNavBar}>

        <div className={styles.containerNavBar}>

            <ul className={styles.mainMenu}>
                <li>{option}</li>
            </ul>
        </div>

    </div>

)
}