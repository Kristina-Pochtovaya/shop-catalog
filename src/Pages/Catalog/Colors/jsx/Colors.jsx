import React from 'react';
import Footer from '../../../Main/Footer/jsx/Footer';
import Header from '../../../Main/Header/jsx/Header';
import colors1 from '../img/colors1.jpg';

const Colors = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container-wrap">
      <div className="items">
        <div className="item">
          <img src={colors1} alt="Краска стойкая интерьерная Alpina" title="Краска стойкая интерьерная Alpina" />
          <p>75 РУБ.</p>
          <h4>Краска стойкая интерьерная Alpina</h4>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Colors;
