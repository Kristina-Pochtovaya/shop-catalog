import React from 'react';
import {Header} from '../../../Main/jsx/Header';
import garden1 from '../img/garden1.jpg';

export const Garden = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container">
      <div className="items-wrap">
        <div className="item">
          <img src={garden1} alt="Качели садовые" title="Качели садовые" />
          <p>390 РУБ.</p>
          <h4>Качели садовые</h4>
        </div>
      </div>
    </div>
  </>
);



