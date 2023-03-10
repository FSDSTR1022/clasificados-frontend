import "./assets/css/App.css";
import * as React from "react";

// Routes
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import { Home } from "./Layout/Pages/Home";
import { MisArticulos } from "./Layout/Pages/MisArticulos";
import { ListaDeseos } from "./Layout/Pages/ListaDeseos";
import { Vender } from "./Layout/Pages/Vender";
import CardItem from "./components/CardItem/index";

import { NotFound } from "./Layout/Pages/NotFound";

import { LoginUser } from "./components/MainMenu/LoginUser";
import { RegisterUser } from "./components/MainMenu/registerUser";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="misarticulos" element={<MisArticulos />} />
            <Route path="listadedeseos" element={<ListaDeseos />} />
            <Route path="vender" element={<Vender />} />
            <Route path="item/:id" element={<CardItem />} />
          </Route>
          <Route>
            <Route path="user/login" element={<LoginUser />} />
            <Route path="user/register" element={<RegisterUser />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
