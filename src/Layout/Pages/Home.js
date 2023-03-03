import styles from "../Pages/Home.module.css";

import MainPage from "../MainPage";
import { ChakraProvider } from "@chakra-ui/react";

export const Home = () => {
  return (
    <div className={styles.containerHome}>
      <ChakraProvider >
        <MainPage/>
      </ChakraProvider>
    </div>
  );
};
