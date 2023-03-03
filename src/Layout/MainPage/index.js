import React from "react";
import styles from "./mainpage.module.css";
import { FiltersProvider } from "./context/filters-context.js";
import { useState } from 'react'

//Componentes importados
import Footer from "../Footer/index";
import ItemTypesList from "../ItemTypesList/index";
import ItemList from "../ItemList/index";
import Search from "../../components/Search";

const MainPage = () => {

  return (
    <>
      <div>
        <FiltersProvider className={styles.provider}>
          <div className={styles.container}>
            <Search className={styles.search} />
            <div className={styles.mainp}>
              <ItemTypesList />
              <ItemList />
            </div>
          </div>
        </FiltersProvider>

        <Footer className="footer" />
      </div>
    </>
  );
};
export default MainPage;
