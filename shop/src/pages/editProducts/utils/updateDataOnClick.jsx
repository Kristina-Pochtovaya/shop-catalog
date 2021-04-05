const updateDataOnClick = (setState, save, state, product, category) => setState({
  isUpdated: save ? !state.isUpdated : state.isUpdated,
  isEditActive: !save,
  isEditActiveId: product.id,
  IsSaveButtonVisible: !!save,
  IsEditButtonVisible: !save,
  productImage: product.image,
  productCategory: save ? state.productCategory : category.category,
  productName: save ? state.productName : product.description,
  productPrice: save ? state.productPrice : product.price,
  productInStock: save ? state.productInStock : product.inStock,
});

export default updateDataOnClick;
