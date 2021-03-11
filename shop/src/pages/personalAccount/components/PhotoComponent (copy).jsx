/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import personalAccount from '../../../assets/personal-account/personal-account.jpg';
import { ADDPHOTO } from '../../../redux/actions/loginPersonalAccountActions';
import postUserPhoto from '../api/post/postUserPhotoRequest';

class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    const { pages } = this.props;
    this.state = {
      imagePreviewUrl: pages.loginPersonalAccountReducer.photo,
    };
  }

  /*   async componentDidMount() {
    const result = await postUserPhoto(
      this.props.pages.loginPersonalAccountReducer.clientEmail, this.state.imagePreviewUrl,
    );
    if (result) {
      this.setState({ imagePreviewUrl: result.avatar });
    }
    console.log(result);
  } */

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
        this.props.onAddPhoto(this.state.imagePreviewUrl);
        await postUserPhoto(
          this.props.pages.loginPersonalAccountReducer.clientEmail,
          this.state.imagePreviewUrl,
        );
      };

      reader.readAsDataURL(file);
    }
  }

  render() {
    const { imagePreviewUrl } = this.state;
    const { pages, onAddPhoto } = this.props;
    /*     console.log(pages.loginPersonalAccountReducer); */
    let $imagePreview = null;

    /*     async function handleOnLoad(e) {
      const result = await postUserPhoto(
        pages.loginPersonalAccountReducer.clientEmail, imagePreviewUrl,
      );
      this.setState({ imagePreviewUrl: result.data });
    } */
    /*   handleOnLoad(); */
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
                onChange={async (e) => {
                  this.handleImageChange(e);
                  this.postUserPhoto = postUserPhoto.bind(this);
                  await postUserPhoto(
                    pages.loginPersonalAccountReducer.clientEmail, imagePreviewUrl, onAddPhoto,
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
