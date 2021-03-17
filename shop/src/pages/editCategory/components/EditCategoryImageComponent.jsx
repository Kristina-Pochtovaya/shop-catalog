import React from 'react';
import getCatalogImage from '../api/get/getCatalogImage';
import noImage from '../../../assets/personal-account/noImage.png';
import setImg from '../../../common/untils/setImg';

class EditCategoryImage extends React.Component {
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
    await getCatalogImage(id,
      this.updateData);
  }

  handleSubmit(e) {
    this.e.preventDefault();
  }

  handleImageChange(e) {
    const { updateCategoryImage } = this.props;
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = async () => {
        this.setState({
          imagePreviewUrl: reader.result,
        });
        updateCategoryImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  }

  updateData = (value) => { this.setState({ imagePreviewUrl: value }); }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          src={imagePreviewUrl == '' ? noImage : imagePreviewUrl}
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
