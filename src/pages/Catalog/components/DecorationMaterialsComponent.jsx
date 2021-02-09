import React from 'react';
import Footer from '../../Main/Footer/components/FooterComponent';
import Header from '../../Main/Header/components/HeaderComponent';
import decorationMaterials1 from '../../../assets/catalog-items/decorationMaterials/decorationMaterials1.jpg';
import decorationMaterials2 from '../../../assets/catalog-items/decorationMaterials/decorationMaterials2.jpg';

const DecorationMaterials = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container-wrap">
      <div className="items">
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

export default DecorationMaterials;