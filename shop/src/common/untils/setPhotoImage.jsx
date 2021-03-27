import personalAccount from '../../assets/personal-account/personal-account.jpg';

function setPhotoImage(name, imagePreviewUrl) {
  let result = '';

  if (name === 'photoPersonalAccount') result = imagePreviewUrl;
  if (name === 'photoPersonalAccountEmpty') result = personalAccount;
  return result;
}

export default setPhotoImage;
