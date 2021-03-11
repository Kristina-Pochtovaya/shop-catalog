import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const userPhoto = '/avatar';

async function postUserPhoto(avatar) {
  const payload = {
    data: {
      avatar,
    },
  };
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };

  try {
    const response = await axios.post(`${serverUrl}${userPhoto}`, payload, config);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postUserPhoto;
