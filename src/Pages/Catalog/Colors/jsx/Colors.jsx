import React from 'react';
import {Header} from '../../../Main/jsx/Header';
import colors1 from '../img/colors1.jpg';

export const Colors = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container">
      <div className="items-wrap">
        <div className="item">
          <img src={colors1} alt="Краска стойкая интерьерная Alpina" title="Краска стойкая интерьерная Alpina" />
          <p>75 РУБ.</p>
          <h4>Краска стойкая интерьерная Alpina</h4>
        </div>
      </div>
    </div>
  </>
);



