import { React, useState } from 'react';
import uploadAction from './api/post/uploadAction';

const ImageForm = ({ handleNewImage }) => {
  const [image, setImage] = useState('');
  const [preview, setPreview] = useState(false);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
    setPreview(true);
  };

  const clearImage = () => {
    setPreview(false);
    setImage('');
  };

  const handleSubmit = () => {
    uploadAction(image);
    setPreview(false);
    setImage(false);
    handleNewImage();
  };

  return (
    <div>
      {preview
        ? (
          <>
            <button type="button" onClick={clearImage}>x</button>
            <h5>Image Preview</h5>
            <img
              src={URL.createObjectURL(image)}
              alt=" preview of upload"
            />
            <button type="button" onClick={handleSubmit}>Upload!</button>
          </>
        )
        : (
          <input
            type="file"
            onChange={handleImageUpload}
            accept="png jpg jpeg"
          />
        )}
    </div>
  );
};

export default ImageForm;
