import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {Header} from './Pages/Main/jsx/Header';
import {Catalog} from './Pages/Main/jsx/Catalog';
import {ElectricalGoodsAndLights} from './Pages/Catalog/ElectricalGoodsAndLights/jsx/ElectricalGoodsAndLights';
import {About} from './Pages/About/jsx/About';
import aboutUS from './Pages/Main/img/about-us.png';

function AppShopCatalog() {
  return (
    <BrowserRouter>
      <Route path = "/">
        <Redirect to ="/main-page"></Redirect>
      </Route>
      <Route path = "/main-page">
        <Header linkItem={<img src={aboutUS} alt="О нас"/>} link="/about"/>
        <Catalog />
      </Route>
      <Route path ="/about">
        <About />
      </Route>
      <Route path ="/electrical-goods-and-lights">
        <ElectricalGoodsAndLights />
      </Route>
    </BrowserRouter>
  );
}

export default AppShopCatalog;
