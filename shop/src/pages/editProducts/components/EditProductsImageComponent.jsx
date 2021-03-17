import React from 'react';
import getProductsImage from '../api/get/getProductsImage';
import noImage from '../../../assets/personal-account/noImage.png';
import setImg from '../../../common/untils/setImg';

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
    await getProductsImage(id,
      this.updateData);
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

  updateData = (value) => { this.setState({ imagePreviewUrl: value }); }

  render() {
    const { imagePreviewUrl } = this.state;
    const { description } = this.props;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          src={imagePreviewUrl == '' ? setImg(description) : imagePreviewUrl}
          className="imageProducts"
          title="image Products"
          alt="imageProducts"
        />
      );
    } else {
      $imagePreview = (
        <img
          src={noImage}
          title="errorImage"
          alt="errorImage"
          className="imageProducts"
        />
      );
    }
    return (
      <div className="previewComponentImage">
        <p className="errorImageString -disabled" id="errorImageString">Размер фото слишком большой</p>
        <form onSubmit={(e) => this.handleSubmit(e)} id="upload-containerImage">
          <label htmlFor="imageProducts" className="imageProductsLabel">
            {$imagePreview}
            <div className="imgPreview">
              <input
                id="imageProducts"
                name="imageProducts"
                className="imageProducts"
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

export default EditProductsImage;
