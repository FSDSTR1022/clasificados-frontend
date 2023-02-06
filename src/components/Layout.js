import { Outlet } from "react-router-dom";
import Header from '../Layout/Header/index';
// import styles from '../components/MainMenu/NavBar.module.css';
import style from '../components/Layout.module.css';

export const Layout = () => {
    return (
        <div className={style.containerLayout}>
            <Header />
            <Outlet />

        </div>
    )
}