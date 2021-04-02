const updateData = (setState, value, name, array = '') => {
  if (name === 'setError') setState({ ErrorMessageProducts: value });
  if (name === 'updateImage') setState({ productImage: value });
  if (name === 'updateProductName') setState({ productName: value });
  if (name === 'updateProductPrice') setState({ productPrice: value });
  if (name === 'updateProductInStock') setState({ productInStock: value });
  if (name === 'updateProductCategory') setState({ productCategory: value, categoriesArray: array });
};

export default updateData;
