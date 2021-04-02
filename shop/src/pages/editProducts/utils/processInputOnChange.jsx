const processNameOnChange = (e, updateCategoryName, updateData, name) => {
  e.preventDefault();
  updateCategoryName(e);
  updateData(e.target.value, name);
};

export default processNameOnChange;
