import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const deleteProduct = '/delete-product';

async function postDeleteProduct(id,
  setIsProductsUpdated,
  isProductsUpdated, updateAfterDelete) {
  const payload = {
    data: {
      id,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${deleteProduct}`, payload);
    const result = response.data;
    isProductsUpdated
      ? setIsProductsUpdated(false)
      : setIsProductsUpdated(true);
    updateAfterDelete();
    return result;
  } catch (error) {
    return null;
  }
}

export default postDeleteProduct;
