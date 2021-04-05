const handleInStockProductsChange = (e, updateStock, updateData, name) => {
  e.preventDefault();
  updateStock(e);
  updateData(e.target.value === 'да' ? 1 : 0, name);
};

export default handleInStockProductsChange;
