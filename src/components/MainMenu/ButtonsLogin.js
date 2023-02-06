import { LoginUser } from "./LoginUser";
import { Link } from "react-router-dom"
import styles from "../MainMenu/ButtonsLogin.module.css"
// import React from "react"

export function ButtonsLogin() {

    const clickLogin= () => {
        console.log('si, por aquí paso! ...');
        <Link to='login' className={styles.login}>Mi Login</Link>;
        <LoginUser />
    }
    return (
    <>
        <div className={styles.containerLogin}>
            <button type='submit' name='button' className={styles.userLogin} onClick={clickLogin}>
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