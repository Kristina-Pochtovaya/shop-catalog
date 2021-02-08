import React from 'react';
import { Footer } from '../../../Main/Footer/jsx/Footer';
import {Header} from '../../../Main/Header/jsx/Header';
import householdAppliancies1 from '../img/householdAppliancies1.jpg';
import householdAppliancies2 from '../img/householdAppliancies2.jpg';

export const HouseholdAppliancies = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container">
      <div className="items-wrap">
        <div className="item">
          <img src={householdAppliancies1} alt="Кофемашина" title="Кофемашина" />
          <p>370 РУБ.</p>
          <h4>Кофемашина</h4>
        </div>
        <div className="item">
          <img src={householdAppliancies2} alt="Печь микроволновая" title="Печь микроволновая" />
          <p>490 РУБ.</p>
          <h4>Светильник потолочный</h4>
        </div>
      </div>
    </div>
    <Footer />
  </>
);



