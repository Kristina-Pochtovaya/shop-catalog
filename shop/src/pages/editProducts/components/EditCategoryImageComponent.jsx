/* eslint-disable react/destructuring-assignment */
import React from 'react';
import postCategoryImage from '../api/post/postCategoryImage';
import getCatalogImage from '../api/get/getCatalogImage';
import noImage from '../../../assets/personal-account/noImage.png';

class EditCategoryImage extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props;
    this.state = {
      id,
      imagePreviewUrl: '',
    };
    this.updateData = this.updateData.bind(this);
  }

  async componentDidMount() {
    await getCatalogImage(this.state.id,
      this.updateData);
  }

  handleSubmit(e) {
    this.e.preventDefault();
  }

  handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = async () => {
        this.setState({
          imagePreviewUrl: reader.result,
        });
        await postCategoryImage(
          this.state.id,
          this.state.imagePreviewUrl,
        );
      };

      reader.readAsDataURL(file);
    }
  }

  updateData(value) {
    this.setState({
      imagePreviewUrl: value,
    });
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          src={imagePreviewUrl}
          className="imageCategory"
          title="image Category"
          alt="imageCategory"
        />
      );
    } else {
      $imagePreview = (
        <img
          src={noImage}
          title="errorImage"
          alt="errorImage"
          className="imageCategory"
        />
      );
    }
    return (
      <div className="previewComponentImage">
        <p className="errorImageString -disabled" id="errorImageString">Размер фото слишком большой</p>
        <form onSubmit={(e) => this.handleSubmit(e)} id="upload-containerImage">
          <label htmlFor="imageCategory" className="imageCategoryLabel">
            {$imagePreview}
            <div className="imgPreview">
              <input
                id="imageCategory"
                name="imageCategory"
                className="imageCategory"
                type="file"
                onChange={async (e) => {
                  this.handleImageChange(e);
                }}
                multiple
              />

            </div>
          </label>
        </form>
      </div>
    );
  }
}

export default EditCategoryImage;
