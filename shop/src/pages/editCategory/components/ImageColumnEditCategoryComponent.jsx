import React from 'react';
import ImagePhotoCategoryProducts from '../../../common/components/image/components/ImagePhotoCategoryProductsComponent';
import EditCategoryImage from './EditCategoryImageComponent';

const ImageColumnEditCategory = ({
  isEditActive, id, image, imgAlt, isEditActiveId, updateCategoryImage, isUpdated, updateData,
}) => (
  <div className="columnImage">
    { (isEditActive && id) !== isEditActiveId
      ? (
        <>
          {image
            ? (
              <ImagePhotoCategoryProducts
                className="imageCategory"
                imagePreviewUrl={image}
                isUpdated={isUpdated}
                updateData={updateData}
              />
            )
            : (
              <ImagePhotoCategoryProducts
                className="setImage"
                imagePreviewUrl={imgAlt}
                isUpdated={isUpdated}
                updateData={updateData}
              />
            )}
        </>
      ) : (
        <EditCategoryImage
          id={id}
          updateCategoryImage={updateCategoryImage}
        />
      )}
  </div>
);

export default ImageColumnEditCategory;
