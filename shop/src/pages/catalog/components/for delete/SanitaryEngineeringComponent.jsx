import { React, useState } from 'react';
import Footer from '../../main/footer/components/FooterComponent';
import Header from '../../main/header/components/HeaderComponent';
import Popup from '../../../common/popup/components/PopUpComponent';
import PopupBasket from './PopupBasketComponent';
import { ConnectedCatalogItem } from './CatalogItemComponent';
import sanitaryEngineering1 from '../../../assets/catalog-items/sanitaryEngineering/sanitaryEngineering1.jpg';
import sanitaryEngineering2 from '../../../assets/catalog-items/sanitaryEngineering/sanitaryEngineering2.jpg';
import sanitaryEngineering3 from '../../../assets/catalog-items/sanitaryEngineering/sanitaryEngineering3.jpg';

const SanitaryEngineering = () => {
  const [popupBasketActive, setPopupBasketctive] = useState(false);

  return (
    <>
      <Header linkItem={<button type="button" className="buttonBack">Назад</button>} link="/main-page" disabled={false} />
      <div className="container-wrap">
        <div className="items">
          <ConnectedCatalogItem
            id={16}
            img={<img className="imgItem" src={sanitaryEngineering1} alt="Душевой уголок Triton Риф 90*90 А" title="Душевой уголок Triton Риф 90*90 А" />}
            description="Душевой уголок Triton Риф 90*90 А"
            inStock={false}
            price={403}
            setPopupBasketctive={setPopupBasketctive}
            counter={1}
          />
          <ConnectedCatalogItem
            id={17}
            img={<img className="imgItem" src={sanitaryEngineering2} alt="Зеркало подвесное Mixline Блюз" title="Зеркало подвесное Mixline Блюз" />}
            description="Зеркало подвесное Mixline Блюз"
            inStock
            price={104}
            setPopupBasketctive={setPopupBasketctive}
            counter={1}
          />
          <ConnectedCatalogItem
            id={18}
            img={<img className="imgItem" src={sanitaryEngineering3} alt="Ванна Троя ЭКСТРА (1670 x 960 x 580, 250 л)" title="Ванна Троя ЭКСТРА (1670 x 960 x 580, 250 л)" />}
            description="Ванна Троя ЭКСТРА (1670 x 960 x 580, 250 л)"
            inStock
            price={598}
            setPopupBasketctive={setPopupBasketctive}
            counter={1}
          />
        </div>
      </div>
      <Popup active={popupBasketActive} setActive={setPopupBasketctive}>
        <PopupBasket closePopup={setPopupBasketctive} />
      </Popup>
      <Footer />
    </>
  );
};

export default SanitaryEngineering;
