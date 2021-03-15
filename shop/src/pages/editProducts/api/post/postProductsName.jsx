import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const productsName = '/products-name';

async function postProductsName(id, description) {
  const payload = {
    data: {
      id,
      description,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${productsName}`, payload);
    const result = response.data;

    return result;
  } catch (error) {
    return null;
  }
}

export default postProductsName;
