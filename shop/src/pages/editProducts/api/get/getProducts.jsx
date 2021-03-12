import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const productsPath = '/products';

async function getProducts(
  updateData, setError,
) {
  try {
    const response = await axios.get(`${serverUrl}${productsPath}`);
    const result = response.data;
    updateData({ products: result }, true);
    return result;
  } catch (error) {
    return setError({ errorMessage: error.message });
  }
}

export default getProducts;
