import React from 'react';
import EditProductsImage from './EditProductsImageComponent';
import InputEditProductsCategory from './InputEditProductsCategoryComponent';
import InputEditProductsName from './InputEditProductsNameComponent';
import InputEditProductsPrice from './InputEditCategoryPriceComponent';
import InputEditProductsInStock from './InputEditProductsInStockComponent';

const IsEditActiveColumnsComponent = ({
  product, categoriesArray, updateImage, updateProductCategory, updateProductName,
  updateProductPrice, updateProductInStock,
}) => (
  <>
    <div className="columnImage">
      <EditProductsImage
        id={product.id}
        updateImage={updateImage}
      />
    </div>
    <div className="columnCategory">
      { categoriesArray.map((category) => (
        product.categoryId === category.id
                      && (
                        <InputEditProductsCategory
                          key={product.id}
                          category={category.category}
                          categoryId={product.categoryId}
                          updateProductCategory={updateProductCategory}
                        />
                      )))}
    </div>
    <div className="columnName">
      <InputEditProductsName
        description={product.description}
        updateProductName={updateProductName}
      />
    </div>
    <div className="columnPrice">
      <InputEditProductsPrice
        price={product.price}
        updateProductPrice={updateProductPrice}
      />
    </div>
    <div className="columnInStock">
      <InputEditProductsInStock
        inStock={product.inStock}
        updateProductInStock={updateProductInStock}
      />
    </div>
  </>
);

export default IsEditActiveColumnsComponent;
