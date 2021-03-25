import React from 'react';
import { connect } from 'react-redux';
import personalAccount from '../../../assets/personal-account/personal-account.jpg';
import { ADDPHOTO } from '../../../redux/actions/loginPersonalAccountActions';
import postUserPhoto from '../api/post/postUserPhotoRequest';
import getUserPhoto from '../api/get/getUserPhotoRequest';
import setClassErrorById from '../../../common/untils/setClassErrorById';

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

  handleSubmit(e) {
    this.e.preventDefault();
  }

  handleImageChange(e) {
    const { pages } = this.props;
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      reader.onloadend = async () => {
        this.setState({
          imagePreviewUrl: reader.result,
        });
        await postUserPhoto(
          pages.loginPersonalAccountReducer.clientEmail,
          reader.result, setClassErrorById,
        );
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
          src={imagePreviewUrl}
          className="photoPersonalAccount"
          title="photoPersonalAccount"
          alt="photoPersonalAccount"
        />
      );
    } else {
      $imagePreview = (
        <img
          src={personalAccount}
          title="photoPersonalAccount"
          alt="photoPersonalAccount"
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
                Выберите фото
              </p>
              <input
                id="avatar"
                name="avatar"
                className="avatar"
                type="file"
                onChange={(e) => {
                  this.handleImageChange(e);
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

const ConnectedImageUpload = connect(
  (state) => ({
    pages: state,
  }),
  (dispatch) => ({
    onAddPhoto: (photo) => dispatch({
      type: ADDPHOTO.type,
      payload: { photo },
    }),
  }),
)(ImageUpload);

export default ConnectedImageUpload;
