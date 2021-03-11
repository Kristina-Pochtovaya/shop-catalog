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
    const { imagePreviewUrl, id, image } = this.state;
    const { pages } = this.props;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          src={imagePreviewUrl}
          className="photoPersonalAccount"
          title="photoPersonalAccount"
          alt="photoPersonalAccount"
        />
      );
    } else {
      $imagePreview = (
        <img
          src={noImage}
          title="errorImage"
          alt="errorImage"
          className="photoPersonalAccount"
        />
      );
    }
    return (
      <div className="previewComponent">
        <p className="errorPhoto -disabled" id="errorPhoto">Размер фото слишком большой</p>
        <form onSubmit={(e) => this.handleSubmit(e)} id="upload-container">
          {$imagePreview}
          <div className="imgPreview">
            <label htmlFor="avatar">
              <p
                className="choosePhotoButton"
              >
                {' '}
                Загрузить картинку
              </p>
              <input
                id="avatar"
                name="avatar"
                className="avatar"
                type="file"
                onChange={async (e) => {
                  this.handleImageChange(e);
                  await postCategoryImage(
                    this.state.id, imagePreviewUrl,
                  );
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

export default EditCategoryImage;
