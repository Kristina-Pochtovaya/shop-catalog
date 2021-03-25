import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const userPhoto = '/avatar';

async function postUserPhoto(email, avatar, setClassErrorById) {
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
    setClassErrorById('errorPhoto', 'errorPhoto -disabled');
    return result;
  } catch (error) {
    setClassErrorById('errorPhoto', 'errorPhoto');
    return false;
  }
}

export default postUserPhoto;
