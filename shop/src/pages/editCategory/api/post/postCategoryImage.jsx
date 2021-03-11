import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const categoryImage = '/category-image';

async function postCategoryImage(id, image) {
  const errorPhoto = document.getElementById('errorPhoto');
  const payload = {
    data: {
      id,
      image,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${categoryImage}`, {
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
    return null;
  }
}

export default postCategoryImage;
