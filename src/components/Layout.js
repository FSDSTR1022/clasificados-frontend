import { Outlet } from "react-router-dom";
import { NavBar } from "./MainMenu/NavBar";

import style from '../components/Layout.module.css';

export const Layout = () => {
    return (
        <div className={style.containerLayout}>
            <NavBar />
            <Outlet />
        </div>
    )
}