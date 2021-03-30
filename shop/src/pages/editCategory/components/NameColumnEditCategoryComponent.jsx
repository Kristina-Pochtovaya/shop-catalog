import React from 'react';
import InputEditCategoryName from './InputEditCategoryNameComponent';

const NameColumnEditCategory = ({
  isEditActive, category, isEditActiveId, updateCategoryName,
}) => (
  <div className="columnName">
    {isEditActive && category.id === isEditActiveId
      ? (
        <InputEditCategoryName
          id={category.id}
          category={category.category}
          updateCategoryName={updateCategoryName}
        />
      ) : <p>{category.category}</p>}
  </div>
);

export default NameColumnEditCategory;
