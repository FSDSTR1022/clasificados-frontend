import React from "react";
import "./module.mainpage.css";
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
      <div className="App">
        <FiltersProvider>
          <Search className="search" />
          <div className="mainp">
            <ItemTypesList classname="types" />
            <ItemList className="itemlist" />
          </div>
        </FiltersProvider>

        <Footer className="footer" />
      </div>
    </>
  );
};
export default MainPage;
