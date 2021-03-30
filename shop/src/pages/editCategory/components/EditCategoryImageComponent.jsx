import React from 'react';
import getCatalogImage from '../api/get/getCatalogImage';
import ImagePhoto from '../../../common/image/components/ImagePhotoComponent';
import setImage from '../utils/setImage';
import FormEditImagePhoto from '../../../common/forms/components/FormEditImagePhotoComponent';

class EditCategoryImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    await getCatalogImage(id,
      this.updateData);
  }

  handleSubmit = (e) => this.e.preventDefault();

  handleImageChange = (e) => {
    const { updateCategoryImage } = this.props;
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    setImage(reader, this.updateData, updateCategoryImage, file);
  }

  updateData = (value) => { this.setState({ imagePreviewUrl: value }); }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (
        <ImagePhoto className="imageCategory" imagePreviewUrl={imagePreviewUrl} />
      );
    } else {
      $imagePreview = (
        <ImagePhoto className="errorImage" />
      );
    }
    return (
      <div className="previewComponentImage">
        <p className="errorImageString -disabled" id="errorImageString">Размер фото слишком большой</p>
        <FormEditImagePhoto
          handleSubmit={this.handleSubmit}
          imagePreview={$imagePreview}
          handleImageChange={this.handleImageChange}
          htmlFor="imageCategory"
          name="imageCategory"
          classNameLabel="imageCategoryLabel"
        />
      </div>
    );
  }
}

export default EditCategoryImage;
