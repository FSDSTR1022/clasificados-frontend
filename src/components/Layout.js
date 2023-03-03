import { Navbar } from "./MainMenu/Navbar";
import { Outlet } from "react-router-dom";

import styles from "../components/Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerLayout}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
