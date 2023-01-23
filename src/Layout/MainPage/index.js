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
        <ItemTypesList classname='types' />
				<ItemList className='itemlist' />
        <Footer className='footer' />
      </div>
    </>
  );
};

export default MainPage;
