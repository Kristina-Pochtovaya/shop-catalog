import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import processInputData from '../../utils/processInputData';
import setClassErrorById from '../../../../common/utils/setClassErrorById';

const newProduct = '/add-product';

async function postNewProduct(state) {
  const payload = processInputData(state);
  try {
    const response = await postRequestMultipartFormData(newProduct, payload);
    const result = response.data;
    setClassErrorById('errorNewImage', 'errorNewImage -disabled');
    return result;
  } catch (error) {
    setClassErrorById('errorNewImage', 'errorNewImage');
    return null;
  }
}

export default postNewProduct;
