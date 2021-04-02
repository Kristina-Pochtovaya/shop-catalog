const processCategoryOnChange = (e, updateCategoryName, updateData, categoriesArray) => {
  e.preventDefault();
  updateCategoryName(e);
  updateData(e.target.value, 'updateProductCategory', categoriesArray.categories);
};

export default processCategoryOnChange;
