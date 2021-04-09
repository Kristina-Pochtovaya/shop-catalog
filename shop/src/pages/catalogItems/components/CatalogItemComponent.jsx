import React from 'react';
import basket from '../../../common/assets/common/basket.png';
import InStockSymbol from '../../../common/components/icons/components/InStockSymbol';
import handleButtonOnClick from '../utils/handleButtonOnClickCatalogItems';

const CatalogItem = ({
  product, img, setPopupBasketctive, onAdd,
}) => (
  <div className="item-wrap" id={product.id}>
    <div className="info">
      <p className={product.inStock ? '-yes' : '-no'}>
        <InStockSymbol className="inStock" />
        Наличие
      </p>
    </div>
    <div className="imgItemCard">{img}</div>
    <h4 className="itemName">{product.description}</h4>
    <div className="purchase">
      <p className="priceCard">
        {product.price}
        {' '}
        РУБ.
      </p>
      <button
        className={product.inStock ? 'busketButton' : 'busketButton -disabled'}
        type="button"
        onClick={() => handleButtonOnClick(product, img, setPopupBasketctive, onAdd)}
      >
        <img className="imgBascet" src={basket} alt="Корзина" title="Корзина" />
        <span className="stringBascet">В корзину</span>
      </button>
    </div>
  </div>
);

export default CatalogItem;
