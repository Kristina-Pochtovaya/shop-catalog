import React from 'react';
import setImage from '../utils/setImage';
import ImagePhoto from '../../../common/image/components/ImagePhotoComponent';
import FormAddImagePhoto from '../../../common/forms/components/FormAddImagePhotoComponent';

class AddCategoryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
    };
  }

  handleSubmit = (e) => this.e.preventDefault();

  handleImageChange = (e) => {
    const { updateImage } = this.props;
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    setImage(reader, this.updateimagePreviewUrl, updateImage, file);
  }

  updateimagePreviewUrl = (value) => this.setState({ imagePreviewUrl: value })

  render() {
    const { imagePreviewUrl } = this.state;

    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (
        <ImagePhoto className="newImage" imagePreviewUrl={imagePreviewUrl} />
      );
    } else {
      $imagePreview = (
        <ImagePhoto className="newImage" />
      );
    }
    return (
      <div className="previewComponent">
        <p className="errorNewImage -disabled" id="errorNewImage">Размер фото слишком большой</p>
        <FormAddImagePhoto
          handleSubmit={this.handleSubmit}
          imagePreview={$imagePreview}
          handleImageChange={this.handleImageChange}
          htmlFor="newImageCatalog"
          name="newImageCatalog"
          classParagraph="addImageButton"
        />
      </div>
    );
  }
}

export default AddCategoryImage;
