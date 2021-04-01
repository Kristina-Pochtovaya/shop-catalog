import React from 'react';
import getUserPhoto from '../api/get/getUserPhoto';
import FormAddImagePhoto from '../../../common/forms/components/FormAddImagePhotoComponent';
import ImagePhotoCategoryProducts from '../../../common/image/components/ImagePhotoCategoryProductsComponent';
import setPhoto from '../utils/setPhoto';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: '',
    };
  }

  async componentDidMount() {
    const { pages } = this.props;
    await getUserPhoto(pages.loginPersonalAccountReducer.clientEmail,
      this.updateData);
  }

  updateImage = (value) => this.setState({ imagePreviewUrl: value })

  handleSubmit = (e) => this.e.preventDefault();

  handleImageChange= (e) => {
    const { pages } = this.props;
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    if (file) { setPhoto(reader, pages, this.updateImage, file); }
  }

  updateData = (value) => { this.setState({ imagePreviewUrl: value }); }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (
        <ImagePhotoCategoryProducts className="photoPersonalAccount" imagePreviewUrl={imagePreviewUrl} />
      );
    } else {
      $imagePreview = (
        <ImagePhotoCategoryProducts className="photoPersonalAccountEmpty" />
      );
    }
    return (
      <div className="previewComponent">
        <p className="errorPhoto -disabled" id="errorPhoto">Размер фото слишком большой</p>
        <FormAddImagePhoto
          handleSubmit={this.handleSubmit}
          imagePreview={$imagePreview}
          handleImageChange={this.handleImageChange}
          htmlFor="avatar"
          name="avatar"
          classParagraph="choosePhotoButton"
        />
      </div>
    );
  }
}

export default ImageUpload;
