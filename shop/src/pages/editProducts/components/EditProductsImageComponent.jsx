import React from 'react';
import postProductsImage from '../api/post/postProductsImage';
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
    this.updateData = this.updateData.bind(this);
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
    const { id, imagePreviewUrl } = this.state;
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = async () => {
        this.setState({
          imagePreviewUrl: reader.result,
        });
        await postProductsImage(
          id,
          imagePreviewUrl,
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
    const { description, isProductsUpdated, setIsProductsUpdated } = this.props;
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
                onBlur={() => (isProductsUpdated
                  ? setIsProductsUpdated(false)
                  : setIsProductsUpdated(true))}
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
