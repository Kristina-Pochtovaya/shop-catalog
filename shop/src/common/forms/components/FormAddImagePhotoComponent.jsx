import React from 'react';

const FormAddImagePhoto = ({
  imagePreview, handleImageChange, htmlFor, name, classParagraph,
}) => (
  <div id="upload-container">
    {imagePreview}
    <div className="imgPreview">
      <label htmlFor={htmlFor}>
        <p
          className={classParagraph}
        >
          Выберите фото
        </p>
        <input
          id={htmlFor}
          name={name}
          className={name}
          type="file"
          onChange={(e) => {
            handleImageChange(e);
          }}
          multiple
        />
      </label>
    </div>
  </div>
);
export default FormAddImagePhoto;
