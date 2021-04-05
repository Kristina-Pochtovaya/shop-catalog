import handleInStockProductsChange from './handleInStockProductsChange';

describe('should exucute the function correctly depends on arguments', () => {
  const e = {
    preventDefault: jest.fn(),
    target: {
      value: 'test',
    },
  };
  const myUpdateStock = jest.fn();
  const myUpdateData = jest.fn();
  const name = 'name';

  it('should run e.preventDefault, myUpdateStock and myUpdateData functions', async () => {
    expect(e.preventDefault).toHaveBeenCalledTimes(0);
    expect(myUpdateStock).toHaveBeenCalledTimes(0);
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    await handleInStockProductsChange(e, myUpdateStock, myUpdateData, name);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
    expect(myUpdateStock).toHaveBeenCalledTimes(1);
    expect(myUpdateData).toHaveBeenCalledTimes(1);
  });

  it('should myUpdateData with arguments 1 and name if e.target.value is да', async () => {
    e.target.value = 'да';
    await handleInStockProductsChange(e, myUpdateStock, myUpdateData, name);
    expect(myUpdateData).toHaveBeenCalledWith(1, name);
  });

  it('should myUpdateData with arguments 0 and name if e.target.value is нет', async () => {
    e.target.value = 'нет';
    await handleInStockProductsChange(e, myUpdateStock, myUpdateData, name);
    expect(myUpdateData).toHaveBeenCalledWith(0, name);
  });
});
