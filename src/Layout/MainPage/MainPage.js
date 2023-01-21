import React from "react";

//Componentes importados
import Tipos from "../../components/Tipos";
import Header from "../Header/Header";
//import Slider from './components/Slider';
import Sidebar from "../../components/Sidebar";
import Footer from "../Footer/Footer";
import Types from "../ItemTypesList/ItemTypesList";

const MainPage = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Types />
        <Tipos />

        <div className="center">
          <section id="content">
            <section className="componentes">{/* <Tipos /> */}</section>
          </section>

          <Sidebar />
          <div className="clearfix"></div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default MainPage;
