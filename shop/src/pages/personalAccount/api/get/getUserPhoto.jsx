import getRequest from '../../../../common/api/get/getRequest';

const userPhoto = '/avatar';

async function getUserPhoto(email, updateData) {
  try {
    const res = await getRequest(userPhoto);
    const result = res.data;

    const photo = result.filter((item) => item.email === email).map((item) => item.photo).join('');
    updateData(photo);
    return result;
  } catch (error) {
    return null;
  }
}

export default getUserPhoto;
