import postUserPhoto from '../api/post/postUserPhotoRequest';
import setClassErrorById from '../../../common/untils/setClassErrorById';

function setPhoto(reader, pages, updateImage, file) {
  const result = reader;
  result.onloadend = async () => {
    updateImage(reader.result);
    await postUserPhoto(
      pages.loginPersonalAccountReducer.clientEmail,
      reader.result, setClassErrorById,
    );
  };
  result.readAsDataURL(file);
}
export default setPhoto;
