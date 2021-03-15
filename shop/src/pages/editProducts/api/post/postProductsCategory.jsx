import axios from 'axios';
import serverUrl from '../../../../common/constants/urls';

const productsCategory = '/products-category';

async function postProductsCategory(id, category, categoriesArray) {
  const categoryId = categoriesArray.filter((categoryItem) => categoryItem.category === category)
    .map((categoryItem) => categoryItem.id);

  const payload = {
    data: {
      id,
      category,
      categoryId,
    },
  };

  try {
    const response = await axios.post(`${serverUrl}${productsCategory}`, payload);
    const result = response.data;

    return result;
  } catch (error) {
    return null;
  }
}

export default postProductsCategory;
