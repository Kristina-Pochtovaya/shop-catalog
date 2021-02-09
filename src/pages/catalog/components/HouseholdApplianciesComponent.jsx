import React from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import householdAppliancies1 from '../../../assets/catalog-items/householdAppliancies/householdAppliancies1.jpg';
import householdAppliancies2 from '../../../assets/catalog-items/householdAppliancies/householdAppliancies2.jpg';

const HouseholdAppliancies = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container-wrap">
      <div className="items">
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

export default HouseholdAppliancies;
