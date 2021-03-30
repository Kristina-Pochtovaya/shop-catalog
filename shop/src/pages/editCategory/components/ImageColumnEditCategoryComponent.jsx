import React from 'react';
import ImagePhoto from '../../../common/image/components/ImagePhotoComponent';
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
              <ImagePhoto
                className="imageCategory"
                imagePreviewUrl={image}
                isUpdated={isUpdated}
                updateData={updateData}
              />
            )
            : (
              <ImagePhoto
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
