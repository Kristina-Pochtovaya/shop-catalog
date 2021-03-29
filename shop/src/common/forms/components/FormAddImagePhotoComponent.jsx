import React from 'react';

const FormAddImagePhoto = ({
  handleSubmit, imagePreview, handleImageChange, htmlFor, name, classParagraph,
}) => (
  <form onSubmit={(e) => handleSubmit(e)} id="upload-container">
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
  </form>
);
export default FormAddImagePhoto;
