import React from 'react';
import { connect } from 'react-redux';
import { ADD, DELETE, actionsCatalogList } from '../../../redux/catalogList/catalogList.actions';
import basket from '../../../assets/common/basket.png';

const ButtonAddToBasketComponent = ({
  onAdd, setPopupBasketctive, img, description, price,
}) => (
  <button
    className="busketButton"
    type="button"
    onClick={() => {
      setPopupBasketctive(true);
      onAdd({
        img,
        description,
        price,
      });
    }}
  >
    <img className="imgBascet" src={basket} alt="Корзина" title="Корзина" />
    <span>В корзину</span>
  </button>
);

const ConnectedButtonAddToBasketComponent = connect(
  (state) => ({
    items: state,
  }), (dispatch) => ({
    onAdd: (img, description, price) => dispatch({
      type: ADD, img, description, price,
    }),
  }),
)(ButtonAddToBasketComponent);
