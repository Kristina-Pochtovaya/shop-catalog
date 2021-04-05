import handleCategoryProductsChange from './handleInStockProductsChange';

describe('should exucute the function correctly depends on arguments', () => {
  const e = {
    preventDefault: jest.fn(),
    target: {
      value: 'test',
    },
  };
  const myUpdateCategoryName = jest.fn();
  const myUpdateData = jest.fn();
  const categoriesArray = {
    categories: 'categories',
  };

  it('should run e.preventDefault, myUpdateCategoryName and myUpdateData functions', async () => {
    expect(e.preventDefault).toHaveBeenCalledTimes(0);
    expect(myUpdateCategoryName).toHaveBeenCalledTimes(0);
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    await handleCategoryProductsChange(e, myUpdateCategoryName, myUpdateData, categoriesArray);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
    expect(myUpdateCategoryName).toHaveBeenCalledTimes(1);
    expect(myUpdateData).toHaveBeenCalledTimes(1);
  });
});
