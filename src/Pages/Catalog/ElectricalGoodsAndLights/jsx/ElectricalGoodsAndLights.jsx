import React from 'react';
import Footer from '../../../Main/Footer/jsx/Footer';
import Header from '../../../Main/Header/jsx/Header';
import light1 from '../img/light1.jpg';
import light2 from '../img/light2.jpg';
import light3 from '../img/light3.jpg';

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
