import transliterate from '../../../common/utils/transliterate';

const processInputData = (state) => {
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

  return payload;
};

export default processInputData;
