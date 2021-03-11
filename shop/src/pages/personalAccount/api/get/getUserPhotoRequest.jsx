import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const userPhoto = '/avatar';

async function getUserPhoto(email, updateData) {
  try {
    const response = await axios.get(`${serverUrl}${userPhoto}`);
    const result = response.data;

    const photo = result.filter((item) => item.email === email).map((item) => item.photo);
    updateData(photo);
    return result;
  } catch (error) {
    return null;
  }
}

export default getUserPhoto;
