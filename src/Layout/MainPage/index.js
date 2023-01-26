import React from "react";
import './module.mainpage.css'

//Componentes importados
import Header from '../Header/index'
import Footer from "../Footer/index";
import ItemTypesList from "../ItemTypesList/index";
import ItemList from '../ItemList/index'
import Search from '../../components/Search';

const MainPage = () => {
  return (
    <>
      <div className="App">
        <Header className='header'/>
				<Search className='search' />
        <div className="mainp">
        <ItemTypesList classname='types' />
				<ItemList className='itemlist' />
        </div>
        <Footer className='footer' />
      </div>
    </>
  );
};

export default MainPage;
