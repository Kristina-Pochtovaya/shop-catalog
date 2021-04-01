import postProducts from '../api/post/postProducts';

const processHandleButtonOnEdit = async (state, product, updateData, isProductsUpdated,
  setIsProductsUpdated) => {
  await postProducts(state);
  updateData(true, state, product);
  isProductsUpdated ? setIsProductsUpdated(false) : setIsProductsUpdated(true);
};

export default processHandleButtonOnEdit;
