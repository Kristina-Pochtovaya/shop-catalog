import React from 'react';
import Footer from '../../Main/Footer/components/FooterComponent';
import Header from '../../Main/Header/components/HeaderComponent';
import kitchen1 from '../../../assets/catalog-items/kitchen/kitchen1.jpg';
import kitchen2 from '../../../assets/catalog-items/kitchen/kitchen2.jpg';

const Kitchen = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container-wrap">
      <div className="items">
        <div className="item">
          <img src={kitchen1} alt="Духовой шкаф" title="Духовой шкаф" />
          <p>690 РУБ.</p>
          <h4>Духовой шкаф</h4>
        </div>
        <div className="item">
          <img src={kitchen2} alt="Духовой шкаф" title="Духовой шкаф" />
          <p>1180 РУБ.</p>
          <h4>Духовой шкаф</h4>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Kitchen;
