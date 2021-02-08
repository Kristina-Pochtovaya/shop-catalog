import React from 'react';
import {Header} from '../../../Main/jsx/Header';
import light1 from '../img/light1.jpg';
import light2 from '../img/light2.jpg';
import light3 from '../img/light3.jpg';

export const ElectricalGoodsAndLights = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container">
      <div className="items-wrap">
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
  </>
);



