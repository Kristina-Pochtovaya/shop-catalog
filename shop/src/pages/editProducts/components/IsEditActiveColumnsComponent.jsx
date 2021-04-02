import React from 'react';
import EditProductsImage from './EditProductsImageComponent';
import InputEditProductsCategory from './InputEditProductsCategoryComponent';
import InputEditProductsName from './InputEditProductsNameComponent';
import InputEditProductsPrice from './InputEditCategoryPriceComponent';
import InputEditProductsInStock from './InputEditProductsInStockComponent';

const IsEditActiveColumnsComponent = ({
  product, categoriesArray, updateData,
}) => (
  <>
    <div className="columnImage">
      <EditProductsImage
        id={product.id}
        updateData={updateData}
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
                          updateData={updateData}
                        />
                      )))}
    </div>
    <div className="columnName">
      <InputEditProductsName
        description={product.description}
        updateData={updateData}
      />
    </div>
    <div className="columnPrice">
      <InputEditProductsPrice
        price={product.price}
        updateData={updateData}
      />
    </div>
    <div className="columnInStock">
      <InputEditProductsInStock
        inStock={product.inStock}
        updateData={updateData}
      />
    </div>
  </>
);

export default IsEditActiveColumnsComponent;
