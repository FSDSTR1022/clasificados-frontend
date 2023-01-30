import React from "react";
import "./module.mainpage.css";
import { FiltersProvider } from "./context/filters-context.js";

//Componentes importados
import Header from "../Header/index";
import Footer from "../Footer/index";
import ItemTypesList from "../ItemTypesList/index";
import ItemList from "../ItemList/index";
import Search from "../../components/Search";

const MainPage = () => {
  function filterhandler(evento){
    console.log(evento)
  }
  return (
    <>
      <div className="App">
        <Header className="header" />
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
