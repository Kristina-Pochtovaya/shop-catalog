import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const categoryEdit = '/category-edit';

async function postCategory(id, category, image) {
  const errorImage = document.getElementById('errorImageString');
  const payload = {
    data: {
      id,
      category,
      image,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${categoryEdit}`, {
      payload,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const result = response.data;
    errorImage.setAttribute('class', 'errorImageString -disabled');
    return result;
  } catch (error) {
    errorImage.setAttribute('class', 'errorImageString');
    return null;
  }
}

export default postCategory;
