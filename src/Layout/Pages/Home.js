import styles from '../Pages/Home.module.css'

import Footer from "../Footer/index";
import ItemTypesList from "../ItemTypesList/index";
import ItemList from '../ItemList/index'
import Search from '../../components/Search';

export const Home = () => {
    return (
            <div className={styles.containerHome}>
                <h2>Page Home</h2>
                <Search className='search' />
                <ItemTypesList classname='types' />
                <ItemList className='itemlist' />
                <Footer className='footer' />
            </div>
    )
}