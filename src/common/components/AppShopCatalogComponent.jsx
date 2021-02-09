import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Header from '../../pages/Main/Header/components/HeaderComponent';
import Catalog from '../../pages/Main/Catalog/components/CatalogComponent';
import Footer from '../../pages/Main/Footer/components/FooterComponent';
import ElectricalGoodsAndLights from '../../pages/Catalog/components/ElectricalGoodsAndLightsComponent';
import Garden from '../../pages/Catalog/components/GardenComponent';
import HouseholdAppliancies from '../../pages/Catalog/components/HouseholdApplianciesComponent';
import Kitchen from '../../pages/Catalog/components/KitchenComponent';
import Decor from '../../pages/Catalog/components/DecorComponent';
import Colors from '../../pages/Catalog/components/Colors';
import HouseholdGoods from '../../pages/Catalog/components/HouseholdGoodsComponent';
import DecorationMaterials from '../../pages/Catalog/components/DecorationMaterialsComponent';
import SanitaryEngineering from '../../pages/Catalog/components/SanitaryEngineeringComponent';
import About from '../../pages/About/components/AboutComponent';
import aboutUS from '../../assets/header/about-us.png';

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
