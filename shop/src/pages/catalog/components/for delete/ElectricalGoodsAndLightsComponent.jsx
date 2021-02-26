import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { ConnectedCatalogItem } from './CatalogItemComponent';
import catalogItems from '../../../common/db/CatalogItemsDataBase';

const ElectricalGoodsAndLights = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          {catalogItems.map((item) => (item.type === 'ElectricalGoodsAndLights' && (
            <ConnectedCatalogItem
              key={item.id}
              id={item.id}
              img={(
                <img
                  className={item.img.className}
                  src={item.img.src}
                  alt={item.img.alt}
                  title={item.img.title}
                />
)}
              description={item.description}
              inStock={item.inStock}
              price={item.price}
              setPopupBasketctive={setPopupBasketctive}
              counter={item.counter}
            />
          )
          ))}
        </div>
      </div>
      <Popup active={popupBasketActive} setActive={setPopupBasketctive}>
        <PopupBasket closePopup={setPopupBasketctive} />
      </Popup>
      <Footer />
    </>
  );
};

export default ElectricalGoodsAndLights;
