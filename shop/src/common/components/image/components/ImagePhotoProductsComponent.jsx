import React from 'react';
import setPhotoImage from '../../../utils/setPhotoImage';

const ImagePhotoProducts = ({ className, product }) => (
  <img
    src={setPhotoImage(className, product.image, product.description)}
    className={className}
    title={product.imgTitle}
    alt={product.imgAlt}
  />
);

export default ImagePhotoProducts;
