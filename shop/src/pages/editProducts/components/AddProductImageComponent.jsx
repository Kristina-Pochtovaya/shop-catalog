import React from 'react';
import noImage from '../../../assets/personal-account/noImage.png';

class AddProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
    };
  }

  handleSubmit(e) {
    this.e.preventDefault();
  }

  handleImageChange(e) {
    const { updateImage } = this.props;
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = async () => {
        this.setState({
          imagePreviewUrl: reader.result,
        });
        updateImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          src={imagePreviewUrl}
          className="newImage"
          title="newImage"
          alt="newImage"
        />
      );
    } else {
      $imagePreview = (
        <img
          src={noImage}
          title="newImage"
          alt="newImage"
          className="noImage"
        />
      );
    }
    return (
      <div className="previewComponent">
        <p className="errorNewImage -disabled" id="errorNewImage">Размер фото слишком большой</p>
        <form onSubmit={(e) => this.handleSubmit(e)} id="upload-container">
          {$imagePreview}
          <div className="imgPreview">
            <label htmlFor="newImageCatalog">
              <p
                className="addImageButton"
              >
                Выберите фото
              </p>
              <input
                id="newImageCatalog"
                name="imageCatalog"
                className="imageCatalog"
                type="file"
                onChange={async (e) => {
                  this.handleImageChange(e);
                }}
                multiple
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProductImage;
