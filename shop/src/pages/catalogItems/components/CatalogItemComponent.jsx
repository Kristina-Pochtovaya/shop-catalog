import React from 'react';
import basket from '../../../common/assets/common/basket.png';
import InStockSymbol from '../../../common/components/icons/components/InStockSymbol';

export const CatalogItem = ({
  product, img, description, price, inStock, id, setPopupBasketctive, counter, onAdd, category,
}) => (
  <div className="item-wrap" id={id}>
    <div className="info">
      <p className={inStock ? '-yes' : '-no'}>
        <InStockSymbol className="inStock" />
        Наличие
      </p>
    </div>
    <div className="imgItemCard">{img}</div>
    <h4 className="itemName">{description}</h4>
    <div className="purchase">
      <p className="priceCard">
        {price}
        {' '}
        РУБ.
      </p>
      <button
        className={inStock ? 'busketButton' : 'busketButton -disabled'}
        type="button"
        onClick={() => {
          setPopupBasketctive(true);
          onAdd({
            img,
            description,
            id,
            price,
            counter,
            category,
          });
        }}
      >
        <img className="imgBascet" src={basket} alt="Корзина" title="Корзина" />
        <span className="stringBascet">В корзину</span>
      </button>
    </div>
  </div>
);

export default CatalogItem;
