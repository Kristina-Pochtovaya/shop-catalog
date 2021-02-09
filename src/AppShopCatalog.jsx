import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from './Pages/Main/Header/jsx/Header';
import Catalog from './Pages/Main/Catalog/jsx/Catalog';
import Footer from './Pages/Main/Footer/jsx/Footer';
import ElectricalGoodsAndLights from './Pages/Catalog/ElectricalGoodsAndLights/jsx/ElectricalGoodsAndLights';
import Garden from './Pages/Catalog/Garden/jsx/Garden';
import HouseholdAppliancies from './Pages/Catalog/HouseholdAppliancies/jsx/HouseholdAppliancies';
import Kitchen from './Pages/Catalog/Kitchen/jsx/Kitchen';
import Decor from './Pages/Catalog/Decor/jsx/Decor';
import Colors from './Pages/Catalog/Colors/jsx/Colors';
import HouseholdGoods from './Pages/Catalog/HouseholdGoods/jsx/HouseholdGoods';
import DecorationMaterials from './Pages/Catalog/DecorationMaterials/jsx/DecorationMaterials';
import SanitaryEngineering from './Pages/Catalog/SanitaryEngineering/jsx/SanitaryEngineering';
import About from './Pages/About/jsx/About';
import aboutUS from './Pages/Main/Header/img/about-us.png';

export function AppShopCatalog() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Redirect to="/main-page" />
      </Route>
      <Route path="/main-page">
        <Header linkItem={<img src={aboutUS} alt="О нас" />} link="/about" />
        <Catalog />
        <Footer />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/electrical-goods-and-lights">
        <ElectricalGoodsAndLights />
      </Route>
      <Route path="/garden">
        <Garden />
      </Route>
      <Route path="/household-appliancies">
        <HouseholdAppliancies />
      </Route>
      <Route path="/kitchen">
        <Kitchen />
      </Route>
      <Route path="/decor">
        <Decor />
      </Route>
      <Route path="/colors">
        <Colors />
      </Route>
      <Route path="/household-goods">
        <HouseholdGoods />
      </Route>
      <Route path="/decoration-materials">
        <DecorationMaterials />
      </Route>
      <Route path="/sanitary-engineering">
        <SanitaryEngineering />
      </Route>
    </BrowserRouter>
  );
}

export default AppShopCatalog;
