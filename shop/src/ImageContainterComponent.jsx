import { React, useState, useEffect } from 'react';
import getImages from './api/get/getImages';
import serverUrl from './common/constants/urls';

const ImageContainter = ({ newImage }) => {
  const [images, setImages] = useState([]);
  const [fallback, setFallback] = useState('');

  useEffect(() => {
    getImages(setImages, setFallback);
  }, [newImage]);

  const configureImage = (image) => `${serverUrl}/${image}`;

  console.log(images);

  return (
    <div>
      {images.length > 0
        ? (images.map((image) => (
          <img
            src={configureImage(image)}
            key={image}
            alt={image}
            width="200"
            height="200"
            className="image"
          />
        ))
        )
        : (
          <>
            <h1>
              {fallback}
            </h1>
            <hr />
            <h3>Upload images in the form below</h3>
          </>
        )}
    </div>
  );
};

export default ImageContainter;
