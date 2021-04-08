import React from 'react';
import postDeleteCategory from '../../../../pages/editCategory/api/post/postDeleteCategory';
import postDeleteProduct from '../../../../pages/editProducts/api/post/postDeleteProduct';

const ButtonDeleteCategoryProducts = ({
  item, category, updateAfterDelete, setIsProductsUpdated = '', isProductsUpdated = '',
}) => (
  <button
    type="button"
    className={category ? 'deleteCategoryButton' : 'deleteProductsButton'}
    onClick={() => {
      category ? postDeleteCategory(item.id, updateAfterDelete)
        : postDeleteProduct(item.id, setIsProductsUpdated,
          isProductsUpdated, updateAfterDelete);
    }}
  >
    Удалить
  </button>
);
export default ButtonDeleteCategoryProducts;
