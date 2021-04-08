import React from 'react';
import AddCategoryProductImage from '../../editCategory/components/AddCategoryProductImage';
import handleButtonClick from '../utils/handleButtonClick';
import setClassErrorById from '../../../common/utils/setClassErrorById';

const FormAddProduct = ({
  updateData, updateImage, state, history, isProductsUpdated, setIsProductsUpdated,
}) => {
  const handleSubmit = (e) => e.preventDefault();
  return (
    <form onSubmit={(e) => handleSubmit(e)} id="upload-container">
      <p className="productCategoriesString">Категория</p>
      <select
        className="productsCategories"
        value={state.categoryName}
        onChange={(e) => updateData('categoryName', e)}
      >
        {state.categoriesArray.categories.map((category) => (
          <option
            key={category.id}
            value={category.category}
          >
            {category.category}
          </option>
        ))}
      </select>
      <p className="productNameString">Название</p>
      <input
        type="text"
        className="productNameInput"
        value={state.productName}
        onChange={(e) => updateData('productName', e)}
      />
      <p className="productPriceString">Цена</p>
      <p id="errorPrice" className="errorPrice -disabled">Цена должна содержать только цифры</p>
      <input
        type="text"
        className="productPriceInput"
        value={state.productPrice}
        onChange={(e) => updateData('productPrice', e)}
        onBlur={(e) => updateData('onBlur', e)}
      />
      <p className="productInStockString">В наличии</p>
      <select
        className="imageColors"
        onChange={(e) => updateData('productInStock', e)}
      >
        <option value defaultValue>да</option>
        <option value={false}>нет</option>
      </select>
      <AddCategoryProductImage updateImage={updateImage} />
      <button
        className="addNewCategoryButton"
        type="button"
        onClick={() => (state.isPriceCorrect
          ? handleButtonClick(state, history, isProductsUpdated, setIsProductsUpdated)
          : setClassErrorById('errorPrice', 'errorPrice'))}
      >
        Добавить
      </button>
    </form>
  );
};

export default FormAddProduct;
