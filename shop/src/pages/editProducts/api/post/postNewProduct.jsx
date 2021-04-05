import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';
import transliterate from '../../../../common/untils/transliterate';

const newProduct = '/add-product';

async function postNewProduct(state) {
  const errorImage = document.getElementById('errorNewImage');
  const imgAlt = transliterate(state.productName);
  const imgTitle = imgAlt;

  const newCategory = state.categoryName === 'Электротовары и свет' ? state.categoriesArray.categories[0].category : state.categoryName;

  let categoryId = state.categoriesArray.categories
    .filter((category) => category.category === newCategory)
    .map((category) => category.id).join('');

  categoryId = Number(categoryId);

  let price = '';

  if (state.productPrice.slice(-1) === '.') {
    price = state.productPrice.slice(0, -5);
  }

  const inStock = state.productInStock === 'да' ? Boolean(true) : Boolean(false);

  const payload = {
    data: {
      categoryId,
      category: newCategory,
      description: state.productName,
      imgAlt,
      imgTitle,
      image: state.image,
      price,
      counter: 1,
      inStock,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${newProduct}`, {
      payload,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const result = response.data;
    errorImage.setAttribute('class', 'errorNewImage -disabled');
    return result;
  } catch (error) {
    errorImage.setAttribute('class', 'errorNewImage');
    return null;
  }
}

export default postNewProduct;
