import { Navbar } from "./MainMenu/Navbar";
import { Outlet } from "react-router-dom";

<<<<<<< HEAD
import style from "../components/Layout.module.css";

export const Layout = () => {
  return (
    <div className={style.containerLayout}>
      <Navbar />
      <Outlet />
=======
import styles from "../components/Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerLayout}>
        <Navbar />
        <Outlet />
      </div>
>>>>>>> main
    </div>
  );
};
