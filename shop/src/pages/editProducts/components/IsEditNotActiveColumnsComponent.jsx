import React from 'react';
import ImagePhotoProducts from '../../../common/components/image/components/ImagePhotoProductsComponent';

const IsEditNotActiveColumnsComponent = ({ product, categoriesArray }) => (
  <>
    <div className="columnImage">
      <>
        {product.image
          ? <ImagePhotoProducts className="imageProducts" product={product} />
          : <ImagePhotoProducts className="imageProductsEmpty" product={product} /> }
      </>
    </div>
    <div className="columnCategory">
      { categoriesArray.map((category) => (
        product.categoryId === category.id && (
          <p key={product.id}>
            { category.category }
          </p>
        )))}
    </div>
    <div className="columnName">
      <p>{product.description}</p>
    </div>
    <div className="columnPrice">
      <p>{product.price}</p>
    </div>
    <div className="columnInStock">
      <p className="inStockString">{Number(product.inStock) === 1 ? 'да' : 'нет'}</p>
    </div>
  </>
);

export default IsEditNotActiveColumnsComponent;
