import React from 'react';
import postDeleteCategory from '../../../pages/editCategory/api/post/postDeleteCategory';

const ButtonDeleteCategory = ({ category, updateAfterDelete }) => (
  <button
    type="button"
    className="deleteCategoryButton"
    onClick={() => postDeleteCategory(category.id, updateAfterDelete)}
  >
    Удалить
  </button>
);
export default ButtonDeleteCategory;
