import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const productsInStock = '/products-instock';

async function postProductsInStock(id, inStock) {
  const payload = {
    data: {
      id,
      inStock,
    },
  };
  if (inStock === 'да') {
    payload.data.inStock = true;
  } else {
    payload.data.inStock = false;
  }

  try {
    const response = await axios.post(`${serverUrl}${productsInStock}`, payload);
    const result = response.data;

    return result;
  } catch (error) {
    return null;
  }
}

export default postProductsInStock;
