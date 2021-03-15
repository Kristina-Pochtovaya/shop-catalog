import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const productsImage = '/products-image';

async function getProductsImage(id, updateData) {
  try {
    const response = await axios.get(`${serverUrl}${productsImage}`);
    const result = response.data;
    const photo = result.filter((product) => product.id === id).map((item) => item.image);
    updateData(photo);
    return result;
  } catch (error) {
    return null;
  }
}

export default getProductsImage;
