import React from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import light1 from '../../../assets/catalog-items/electricalGoodsAndLights/light1.jpg';
import light2 from '../../../assets/catalog-items/electricalGoodsAndLights/light2.jpg';
import light3 from '../../../assets/catalog-items/electricalGoodsAndLights/light3.jpg';

const ElectricalGoodsAndLights = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container-wrap">
      <div className="items">
        <div className="item">
          <img src={light1} alt="Светильник потолочный" title="Светильник потолочный" />
          <p>163 РУБ.</p>
          <h4>Светильник потолочный</h4>
        </div>
        <div className="item">
          <img src={light2} alt="Светильник потолочный" title="Светильник потолочный" />
          <p>101 РУБ.</p>
          <h4>Светильник потолочный</h4>
        </div>
        <div className="item">
          <img src={light3} alt="Лампа настольная" title="Лампа настольная" />
          <p>78 РУБ.</p>
          <h4>Лампа настольная</h4>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default ElectricalGoodsAndLights;
