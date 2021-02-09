import React from 'react';
import Footer from '../../Main/Footer/components/FooterComponent';
import Header from '../../Main/Header/components/HeaderComponent';
import garden1 from '../../../assets/catalog-items/garden/garden1.jpg';

const Garden = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container-wrap">
      <div className="items">
        <div className="item">
          <img src={garden1} alt="Качели садовые" title="Качели садовые" />
          <p>390 РУБ.</p>
          <h4>Качели садовые</h4>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Garden;
