import postUserPhoto from '../api/post/postUserPhotoRequest';

function setPhoto(reader, pages, updateImage, file) {
  const result = reader;
  result.onloadend = async () => {
    updateImage(reader.result);
    await postUserPhoto(
      pages.loginPersonalAccountReducer.clientEmail,
      reader.result,
    );
  };
  result.readAsDataURL(file);
}
export default setPhoto;
