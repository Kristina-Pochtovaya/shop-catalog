import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const productsImage = '/products-image';

async function postProductsImage(id, image) {
  const errorImage = document.getElementById('errorImageString');
  const payload = {
    data: {
      id,
      image,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${productsImage}`, {
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

export default postProductsImage;
