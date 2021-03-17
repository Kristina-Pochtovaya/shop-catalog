import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const productsEdit = '/products-edit';

async function postProducts(id, image, category, categoriesArray, description, price, inStock) {
  const errorImage = document.getElementById('errorImageString');

  const categoryId = categoriesArray.filter((categoryItem) => categoryItem.category === category)
    .map((categoryItem) => categoryItem.id);

  const payload = {
    data: {
      id,
      categoryId,
      category,
      description,
      image,
      price,
      inStock,
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
