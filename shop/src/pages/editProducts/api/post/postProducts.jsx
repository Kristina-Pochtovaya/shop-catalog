import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import setClassErrorById from '../../../../common/utils/setClassErrorById';

const productsEdit = '/products-edit';

async function postProducts(state) {
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
    const response = postRequestMultipartFormData(productsEdit, payload);
    const result = response.data;
    setClassErrorById('errorImageString', 'errorImageString -disabled');
    return result;
  } catch (error) {
    setClassErrorById('errorImageString', 'errorImageString');
    return null;
  }
}

export default postProducts;
