import React from "react";
import styles from "./mainpage.module.css";
import { FiltersProvider } from "./context/filters-context.js";
import { useState } from "react";

//Componentes importados
import Footer from "../Footer/index";
import ItemTypesList from "../ItemTypesList/index";
import ItemList from "../ItemList/index";
import Search from "../../components/Search";
import { Paginator } from "../../components/Paginator";

const MainPage = () => {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <>
      <div>
        <FiltersProvider className={styles.provider}>
          <div className={styles.container}>
            <Search className={styles.search} />
            <div className={styles.mainp}>
              <ItemTypesList />
              <ItemList onTotalCountChange={setTotalCount} />
            </div>
            <Paginator totalCount={totalCount} />
          </div>
        </FiltersProvider>

        <Footer className="footer" />
      </div>
    </>
  );
};
export default MainPage;
