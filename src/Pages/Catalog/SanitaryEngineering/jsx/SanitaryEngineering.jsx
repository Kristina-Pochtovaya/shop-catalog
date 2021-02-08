import React from 'react';
import {Header} from '../../../Main/jsx/Header';
import sanitaryEngineering1 from '../img/sanitaryEngineering1.jpg';
import sanitaryEngineering2 from '../img/sanitaryEngineering2.jpg';
import sanitaryEngineering3 from '../img/sanitaryEngineering3.jpg';

export const SanitaryEngineering = () => (
  <>
    <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" />
    <div className="container">
      <div className="items-wrap">
        <div className="item">
          <img src={sanitaryEngineering1} alt="Душевой уголок" title="Душевой уголок" />
          <p>403 РУБ.</p>
          <h4>Душевой уголок</h4>
        </div>
        <div className="item">
          <img src={sanitaryEngineering2} alt="Зеркало подвесное" title="Зеркало подвесное" />
          <p>104 РУБ.</p>
          <h4>Зеркало подвесное</h4>
        </div>
        <div className="item">
          <img src={sanitaryEngineering3} alt="Ванна" title="Ванна" />
          <p>598 РУБ.</p>
          <h4>Ванна</h4>
        </div>
      </div>
    </div>
  </>
);



