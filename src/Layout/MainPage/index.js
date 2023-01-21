import React from "react";

//Componentes importados
import Header from '../Header/index'
import Footer from "../Footer/index";
import ItemTypesList from "../ItemTypesList/index";
import ItemList from '../ItemList/index'

const MainPage = () => {
  return (
    <>
      <div className="App">
        <Header className='header'/>
        <ItemTypesList classname='types' />
				<ItemList className='itemlist' />
        <Footer className='footer' />
      </div>
    </>
  );
};

export default MainPage;
