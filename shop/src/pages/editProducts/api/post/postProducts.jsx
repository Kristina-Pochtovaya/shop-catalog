import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const productsEdit = '/products-edit';

async function postProducts(state) {
  const errorImage = document.getElementById('errorImageString');

  const categoryId = state.categoriesArray
    .filter((categoryItem) => categoryItem.category === state.productCategory)
    .map((categoryItem) => categoryItem.id);
  const payload = {
    data: {
      id: state.isEditActiveId,
      categoryId,
      category: state.productCategory,
      description: state.productName,
      image: state.productImage,
      price: state.productPrice,
      inStock: state.productInStock,
    },
  };
  try {
    const response = await axios.post(`${serverUrl}${productsEdit}`, {
      payload,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const result = response.data;
    errorImage.setAttribute('class', 'errorImageString -disabled');
    return result;
  } catch (error) {
    errorImage.setAttribute('class', 'errorImageString');
    return null;
  }
}

export default postProducts;
