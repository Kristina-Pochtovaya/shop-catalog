import React from 'react';
import getCatalogProductsImage from '../../../common/api/get/getCatalogProductsImage';
import setImage from '../../../common/untils/setImage';
import ImagePhotoCategoryProducts from '../../../common/image/components/ImagePhotoCategoryProductsComponent';
import FormEditImagePhoto from '../../../common/forms/components/FormEditImagePhotoComponent';

class EditProductsImage extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      id,
      imagePreviewUrl: '',
    };
  }

  async componentDidMount() {
    const { id } = this.state;
    await getCatalogProductsImage(id, this.updateData, '/products');
  }

  handleSubmit = (e) => this.e.preventDefault();

  handleImageChange = (e) => {
    const { updateData } = this.props;
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    setImage(reader, this.updateData, updateData, file);
  }

  updateData = (value) => { this.setState({ imagePreviewUrl: value }); }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (
        <ImagePhotoCategoryProducts className="imageProducts" imagePreviewUrl={imagePreviewUrl} />
      );
    } else {
      $imagePreview = (
        <ImagePhotoCategoryProducts className="errorImage" />
      );
    }
    return (
      <div className="previewComponentImage">
        <p className="errorImageString -disabled" id="errorImageString">Размер фото слишком большой</p>
        <FormEditImagePhoto
          handleSubmit={this.handleSubmit}
          imagePreview={$imagePreview}
          handleImageChange={this.handleImageChange}
          htmlFor="imageProducts"
          name="name"
          classNameLabel="imageProductsLabel"
        />
      </div>
    );
  }
}

export default EditProductsImage;
