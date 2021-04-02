import postRequest from '../../../../common/api/post/postRequest';

const deleteProduct = '/delete-product';

async function postDeleteProduct(id, setIsProductsUpdated, isProductsUpdated, updateAfterDelete) {
  const payload = {
    data: {
      id,
    },
  };

  try {
    const response = await postRequest(deleteProduct, payload);
    const result = response.data;
    isProductsUpdated ? setIsProductsUpdated(false) : setIsProductsUpdated(true);
    updateAfterDelete();
    return result;
  } catch (error) {
    return null;
  }
}

export default postDeleteProduct;
