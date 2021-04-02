import postProducts from '../api/post/postProducts';

const processHandleButtonOnEdit = async (setState, state, product, updateData, isProductsUpdated,
  setIsProductsUpdated) => {
  await postProducts(state);
  updateData(setState, true, state, product);
  isProductsUpdated ? setIsProductsUpdated(false) : setIsProductsUpdated(true);
};

export default processHandleButtonOnEdit;
