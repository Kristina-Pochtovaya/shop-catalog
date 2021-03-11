import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const userPhoto = '/avatar';

async function postUserPhoto(email, avatar) {
  const errorPhoto = document.getElementById('errorPhoto');
  const payload = {
    data: {
      email,
      avatar,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${userPhoto}`, {
      payload,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const result = response.data;
    errorPhoto.setAttribute('class', 'errorPhoto -disabled');
    return result;
  } catch (error) {
    errorPhoto.setAttribute('class', 'errorPhoto');
    return error.message;
  }
}

export default postUserPhoto;
