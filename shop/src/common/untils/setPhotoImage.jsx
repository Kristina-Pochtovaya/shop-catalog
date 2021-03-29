import personalAccount from '../../assets/personal-account/personal-account.jpg';
import noImage from '../../assets/personal-account/noImage.png';
import setImg from './setImg';

function setPhotoImage(name, imagePreviewUrl) {
  let result = '';

  if (name === 'photoPersonalAccount') result = imagePreviewUrl;
  if (name === 'photoPersonalAccountEmpty') result = personalAccount;

  if (name === 'imageCategory' || name === 'newImage') result = imagePreviewUrl;
  if (name === 'errorImage' || imagePreviewUrl == '' || name === 'newImageEmpty') result = noImage;

  if (name === 'setImage') result = setImg(imagePreviewUrl);
  return result;
}

export default setPhotoImage;
