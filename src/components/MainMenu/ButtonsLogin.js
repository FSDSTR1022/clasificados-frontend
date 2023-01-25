import styles from "../MainMenu/ButtonsLoginUser.module.css"

export function ButtonsLogin() {
    
    return (
    <>
        <div className={styles.containerLogin}>
            <input type='submit' name='button' value='Login' className={styles.userLogin}/>
            <input type='submit' name='button' value='Registrarse' className={styles.userRegister}/>
        </div>
    </>
    )
}