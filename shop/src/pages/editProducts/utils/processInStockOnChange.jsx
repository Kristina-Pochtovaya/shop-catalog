const processInStockOnChange = (e, updateCategoryName, updateData, name) => {
  e.preventDefault();
  updateCategoryName(e);
  updateData(e.target.value === 'да' ? 1 : 0, name);
};

export default processInStockOnChange;
