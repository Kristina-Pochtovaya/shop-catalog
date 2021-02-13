import React from 'react';
import { connect } from 'react-redux';
import basket from '../../../assets/common/basket.png';
import { ADD } from '../../../redux/actions/catalogItemsActions';

export const CatalogItem = ({
  img, description, price, inStock, id, setPopupBasketctive, onAdd,
}) => (
  <div className="item-wrap" id={id}>
    <div className="info">
      <p className={inStock ? '-yes' : '-no'}>
        <svg viewBox="0 0 15 15">
          <g>
            <path d="M7.5,0A7.5,7.5,0,1,0,15,7.5,7.51,7.51,0,0,0,7.5,0Zm4.31,6.23L7.09,10.94a1.06,1.06,0,0,1-1.5,0l-2.4-2.4A1.06,1.06,0,1,1,4.69,7L6.34,8.69l4-4a1.06,1.06,0,0,1,1.5,1.5Z" />
          </g>
        </svg>
        Наличие
      </p>
    </div>
    {img}
    <h4 className="itemName">{description}</h4>
    <div className="purchase">
      <p>
        {price}
        {' '}
        РУБ.
      </p>
      <button
        className="busketButton"
        type="button"
        onClick={() => {
          setPopupBasketctive(true);
          onAdd({
            img, description, id, price,
          });
        }}
      >
        <img className="imgBascet" src={basket} alt="Корзина" title="Корзина" />
        <span>В корзину</span>
      </button>
    </div>
  </div>
);

export const ConnectedCatalogItem = connect(
  (state) => ({
    items: state,
  }),
  (dispatch) => ({
    onAdd: (item) => dispatch({
      type: ADD.type,
      payload: { item },
    }),
  }),
)(CatalogItem);
