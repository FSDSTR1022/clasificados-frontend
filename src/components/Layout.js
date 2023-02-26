import { Navbar } from "./MainMenu/Navbar";
import { Outlet } from "react-router-dom";

import style from "../components/Layout.module.css";

export const Layout = () => {
  return (
    <div className={style.containerLayout}>
      <Navbar />
      <Outlet />
    </div>
  );
};
