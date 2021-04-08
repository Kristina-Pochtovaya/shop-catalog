import postNewCategory from '../api/post/postNewCategory';
import setClassErrorById from '../../../common/utils/setClassErrorById';
import checkOnSymbols from '../../../common/utils/checkOnSymbols';

const processResultAddNewCategory = async (categoryName, image, titleColor, history,
  isProductsUpdated, setIsProductsUpdated) => {
  let newCategoryName = '';
  let result = '';
  newCategoryName = checkOnSymbols(categoryName);

  if (newCategoryName === 'Prohibited symbols') {
    setClassErrorById('errorProhibitedsymbols', 'errorProhibitedsymbols');
  } else {
    result = await postNewCategory(categoryName, image, titleColor);

    if (result === categoryName) {
      history.push('/edit-category');
      setIsProductsUpdated(!isProductsUpdated);
    } if (result === false) {
      setClassErrorById('errorNewImage', 'errorNewImage');
    } if (result === 'Not new category') {
      setClassErrorById('errorNewName', 'errorNewName');
    }
  }
};

export default processResultAddNewCategory;
