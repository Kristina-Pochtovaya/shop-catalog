import setClassErrorById from '../../../common/untils/setClassErrorById';
import postNewProduct from '../api/post/postNewProduct';

const handleButtonClick = async (state, history, isProductsUpdated, setIsProductsUpdated) => {
  const result = await postNewProduct(state);
  if (result === true) {
    history.push('/edit-products');
  } if (result === false) {
    setClassErrorById('errorNewImage', 'errorNewImage');
  }

  isProductsUpdated
    ? setIsProductsUpdated(false)
    : setIsProductsUpdated(true);
};

export default handleButtonClick;
