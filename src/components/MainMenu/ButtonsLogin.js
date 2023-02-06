import styles from "../MainMenu/ButtonsLogin.module.css"
// import React from "react"

export function ButtonsLogin() {

    return (
    <>
        <div className={styles.containerLogin}>
            <button type='submit' name='button' className={styles.userLogin}>
                Login
            </button>

            <button type='submit' name='button' className={styles.userRegister}>
                Registrarse
            </button>
        </div>
    </>
    )
}
    /* <input type='submit' name='button' value='Login' className={styles.userRegister}/>
    <input type='submit' name='button' value='Registrarse' className={styles.registerUser}/> */