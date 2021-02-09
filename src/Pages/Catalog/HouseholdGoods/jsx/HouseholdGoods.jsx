import React from 'react';
import { Footer } from '../../../Main/Footer/jsx/Footer';
import {Header} from '../../../Main/Header/jsx/Header';
import householdGoods1 from '../img/householdGoods1.jpg';

export const HouseholdGoods = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container-wrap">
      <div className="items">
        <div className="item">
          <img src={householdGoods1} alt="Комлект постельного белья" title="Комлект постельного белья" />
          <p>5 РУБ.</p>
          <h4>Комлект постельного белья</h4>
        </div>
      </div>
    </div>
    <Footer />
  </>
);



