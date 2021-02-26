import axios from 'axios';
import serverUrl from '../../constants/urls';

const categoryPath = '/products';

async function getProductsRequest(
  setProducts, setLoadingProducts, setErrorProducts,
) {
  try {
    const response = await axios.get(`${serverUrl}${categoryPath}`);
    const result = response.data;
    setProducts({ products: result });
    setLoadingProducts(true);
    return result;
  } catch (error) {
    return setErrorProducts({ errorMessage: error.message });
  }
}

export default getProductsRequest;
