import getRequest from '../../../../common/api/get/getRequest';

const productsPath = '/products';

async function getProducts(updateData, setError) {
  try {
    const response = await getRequest(productsPath);
    const result = response.data;
    updateData({ products: result }, true, 'updateProducts');
    return result;
  } catch (error) {
    return setError({ errorMessage: error.message }, 'setError');
  }
}

export default getProducts;
