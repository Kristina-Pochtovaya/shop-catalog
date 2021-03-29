import React from 'react';

const FormEditImagePhoto = ({
  handleSubmit, imagePreview, handleImageChange, htmlFor, name, classNameLabel,
}) => (
  <form onSubmit={(e) => handleSubmit(e)} id="upload-containerImage">
    <label htmlFor={htmlFor} className={classNameLabel}>
      {imagePreview}
      <div className="imgPreview">
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
      </div>
    </label>
  </form>
);
export default FormEditImagePhoto;
