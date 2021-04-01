import React from 'react';

const ButtonEditProducts = ({
  category, product, handleButtonOnClick,
  IsEditButtonVisible = false, isEditActive = false, isEditActiveId = false,
}) => (
  <div className="columnEdit" key={product.id}>
    <button
      type="button"
      className="editProductsButton"
      onClick={() => (IsEditButtonVisible && isEditActive && product.id === isEditActiveId
        ? handleButtonOnClick(product)
        : handleButtonOnClick(product, category))}
    >
      {IsEditButtonVisible && isEditActive && product.id === isEditActiveId ? 'Сохранить' : 'Изменить'}
    </button>
  </div>
);
export default ButtonEditProducts;
