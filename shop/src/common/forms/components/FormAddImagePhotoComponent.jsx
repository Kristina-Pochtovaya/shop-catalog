import React from 'react';

const FormAddImagePhoto = ({
  handleSubmit, imagePreview, handleImageChange, htmlFor, name,
}) => (
  <form onSubmit={(e) => handleSubmit(e)} id="upload-container">
    {imagePreview}
    <div className="imgPreview">
      <label htmlFor={htmlFor}>
        <p
          className="choosePhotoButton"
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
  </form>
);
export default FormAddImagePhoto;
