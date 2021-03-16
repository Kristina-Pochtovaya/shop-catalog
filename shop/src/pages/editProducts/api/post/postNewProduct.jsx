import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';
import transliterate from '../../../../common/untils/transliterate';

const newProduct = '/add-product';

async function postNewProduct(
  productName, image, categoryName, productPrice, productInStock, categoriesArray,
) {
  const errorImage = document.getElementById('errorNewImage');
  const imgAlt = transliterate(productName);
  const imgTitle = imgAlt;

  const categoryId = categoriesArray.categories
    .filter((category) => category.category === categoryName)
    .map((category) => category.id);

  let price = '';

  if (productPrice.slice(-1) === '.') {
    price = productPrice.slice(0, -5);
  }

  const inStock = productInStock === 'да' ? Boolean(true) : Boolean(false);

  const payload = {
    data: {
      categoryId,
      category: categoryName,
      description: productName,
      imgAlt,
      imgTitle,
      image,
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
