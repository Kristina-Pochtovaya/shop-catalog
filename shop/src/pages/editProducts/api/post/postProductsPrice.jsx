import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const productsPrice = '/products-price';

async function postProductsPrice(id, price) {
  const payload = {
    data: {
      id,
      price,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${productsPrice}`, payload);
    const result = response.data;
    return result;
  } catch (error) {
    return null;
  }
}

export default postProductsPrice;
