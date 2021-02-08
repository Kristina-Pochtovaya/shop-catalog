import React from 'react';
import { Footer } from '../../../Main/Footer/jsx/Footer';
import {Header} from '../../../Main/Header/jsx/Header';
import decorationMaterials1 from '../img/decorationMaterials1.jpg';
import decorationMaterials2 from '../img/decorationMaterials2.jpg';

export const DecorationMaterials = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container">
      <div className="items-wrap">
        <div className="item">
          <img src={decorationMaterials1} alt="Ковер" title="Ковер" />
          <p>267 РУБ.</p>
          <h4>Ковер</h4>
        </div>
        <div className="item">
          <img src={decorationMaterials2} alt="Плитка керамическая" title="Плитка керамическая" />
          <p>17 РУБ.</p>
          <h4>Плитка керамическая</h4>
        </div>
      </div>
    </div>
    <Footer />
  </>
);



