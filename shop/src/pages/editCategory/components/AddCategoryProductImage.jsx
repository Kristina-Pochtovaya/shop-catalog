import React from 'react';
import setImage from '../../../common/utils/setImage';
import ImagePhotoCategoryProducts from '../../../common/components/image/components/ImagePhotoCategoryProductsComponent';
import FormAddImagePhoto from '../../../common/components/forms/components/FormAddImagePhotoComponent';

class AddCategoryProductImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
    };
  }

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
        <ImagePhotoCategoryProducts className="newImage" imagePreviewUrl={imagePreviewUrl} />
      );
    } else {
      $imagePreview = (
        <ImagePhotoCategoryProducts className="newImageEmpty" />
      );
    }
    return (
      <div className="previewComponent">
        <p className="errorNewImage -disabled" id="errorNewImage">Размер фото слишком большой</p>
        <FormAddImagePhoto
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

export default AddCategoryProductImage;
