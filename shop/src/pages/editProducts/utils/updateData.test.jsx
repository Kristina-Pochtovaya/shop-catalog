import updateData from './updateData';

describe('should run setState with arguments that depends on name prop', () => {
  const mySetState = jest.fn();
  const value = 'value';
  const array = 'array';

  it('should run setState with arguments ErrorMessageProducts: value', () => {
    const name = 'setError';
    updateData(mySetState, value, name, array);
    expect(mySetState).toHaveBeenCalledWith({ ErrorMessageProducts: value });
  });

  it('should run setState with arguments productCategory: value, categoriesArray: array', () => {
    const name = 'updateProductCategory';
    updateData(mySetState, value, name, array);
    expect(mySetState).toHaveBeenCalledWith({ productCategory: value, categoriesArray: array });
  });

  it('should not run setState if the value of the prop name is not definied inside the function', () => {
    const name = 'test';
    updateData(mySetState, value, name, array);
    expect(mySetState).toHaveBeenCalledTimes(0);
  });
});
