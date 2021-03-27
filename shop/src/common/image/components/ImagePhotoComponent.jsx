import React from 'react';
import setPhotoImage from '../../untils/setPhotoImage';

const ImagePhoto = ({
  className, imagePreviewUrl = '',
}) => (
  <img
    src={setPhotoImage(className, imagePreviewUrl)}
    className={className}
    title={className}
    alt={className}
  />
);
export default ImagePhoto;
