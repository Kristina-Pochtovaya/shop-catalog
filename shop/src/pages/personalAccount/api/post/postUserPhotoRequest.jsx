import setClassErrorById from '../../../../common/utils/setClassErrorById';
import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';

const userPhoto = '/avatar';

async function postUserPhoto(email, avatar) {
  const payload = {
    data: {
      email,
      avatar,
    },
  };

  try {
    const response = postRequestMultipartFormData(userPhoto, payload);
    const result = response.data;
    setClassErrorById('errorPhoto', 'errorPhoto -disabled');
    return result;
  } catch (error) {
    setClassErrorById('errorPhoto', 'errorPhoto');
    return false;
  }
}

export default postUserPhoto;
