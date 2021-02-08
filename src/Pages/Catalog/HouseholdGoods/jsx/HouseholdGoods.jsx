import React from 'react';
import {Header} from '../../../Main/jsx/Header';
import householdGoods1 from '../img/householdGoods1.jpg';

export const HouseholdGoods = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container">
      <div className="items-wrap">
        <div className="item">
          <img src={householdGoods1} alt="Комлект постельного белья" title="Комлект постельного белья" />
          <p>155 РУБ.</p>
          <h4>Комлект постельного белья</h4>
        </div>
      </div>
    </div>
  </>
);



