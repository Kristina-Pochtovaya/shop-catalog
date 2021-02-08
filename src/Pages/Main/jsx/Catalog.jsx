import React from 'react';
import {Link} from 'react-router-dom';
import electricalGoodsAndLights from '../img/electrical-goods-and-lights.jpg';
import garden from '../img/garden.jpg';
import householdAppliancies from '../img/household-appliancies.jpg';
import kitchen from '../img/kitchen.jpg';
import decor from '../img/decor.jpg';
import colors from '../img/colors.jpg';
import householdGoods from '../img/household-goods.jpg';
import decorationMaterials from '../img/decoration-materials.jpg';
import sanitaryEngineering from '../img/sanitary-engineering.jpg';

export const Catalog = () => (
  <div className="catalog-box">
  <h1 className="catalog"> Каталог </h1>
  <div className="items-wrap">
    <div className="item">
      <Link to="/electrical-goods-and-lights" >
        <img src={electricalGoodsAndLights} alt="Электротовары и свет" title="Электротовары и свет" />
      </Link>
      <h3 className="titleElectricalGoodsAndLights">Электротовары и свет</h3>
    </div>
    <div className="item">
      <Link to="/garden" >
        <img src={garden} alt="Сад" title="Сад" />
      </Link>
      <h3 className="titleGarden">Сад</h3>
    </div>
    <div className="item">
      <Link to="/household-appliancies" >
        <img src={householdAppliancies} alt="Бытовая техника" title="Бытовая техника" />
      </Link>
      <h3 className="titleHouseholAppliancies">Бытовая техника</h3>
    </div>
    <div className="item">
      <Link to="/kitchen">
        <img src={kitchen} alt="Кухня" title="Кухня" />
        </Link>
      <h3 className="titleKitchen">Кухня</h3>
    </div>
    <div className="item">
      <Link to="/decor">
        <img src={decor} alt="Декор" title="Декор" />
        </Link>  
        <h3 className="titleDecor">Декор</h3>
    </div>
    <div className="item">
      <Link to="/colors">
        <img src={colors} alt="Краски" title="Краски" />
      </Link>  
      <h3 className="titleColors">Краски</h3>
    </div>
    <div className="item">
      <Link to="/household-goods">
        <img src={householdGoods} alt="Товары для дома" title="Товары для дома" />
        </Link>  
      <h3 className="titleHouseholdGoods">Товары для дома</h3>
    </div>
    <div className="item">
      <Link to="/decoration-materials">
        <img src={decorationMaterials} alt="Отделочные материалы" title="Отделочные материалы" />
      </Link>
      <h3 className="titleDecorationMaterials">Отделочные материалы</h3>
    </div>
    <div className="item">
      <Link to="sanitary-engineering">
        <img src={sanitaryEngineering} alt="Сантехника" title="Сантехника" />
      </Link>
      <h3 className="titleSanitaryEngineering">Сантехника</h3>
    </div>
</div>
</div>

);



