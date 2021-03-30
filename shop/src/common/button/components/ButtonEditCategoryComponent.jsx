import React from 'react';

const ButtonEditCategory = ({
  className = '', category, handleButtonOnSave = '', handleButtonOnEdit = '',
  IsEditButtonVisible = false, isEditActive = false, isEditActiveId = false,
}) => (
  <button
    type="button"
    className={className}
    onClick={() => {
      (IsEditButtonVisible && isEditActive && category.id === isEditActiveId)
        ? handleButtonOnSave(category) : handleButtonOnEdit(category);
    }}
  >
    {(IsEditButtonVisible && isEditActive && category.id === isEditActiveId) ? 'Сохранить' : 'Изменить'}
  </button>
);
export default ButtonEditCategory;
