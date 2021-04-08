import updateData from './updateData';

describe('should run setState with arguments that depends on name prop', () => {
  const mySetState = jest.fn();
  const value = 'value';

  it('should run setState with arguments ordersArray: value', () => {
    const name = 'ordersArray';
    updateData(mySetState, name, value);
    expect(mySetState).toHaveBeenCalledWith({ ordersArray: value });
  });

  it('should run setState with arguments isLoading: value', () => {
    const name = 'isLoading';
    updateData(mySetState, name, value);
    expect(mySetState).toHaveBeenCalledWith({ isLoading: value });
  });

  it('should run setState with arguments errorMessage: value', () => {
    const name = 'error';
    updateData(mySetState, name, value);
    expect(mySetState).toHaveBeenCalledWith({ errorMessage: value });
  });

  it('should not run setState if the value of the prop name is not definied inside the function', () => {
    const name = 'test';
    updateData(mySetState, name, value);
    expect(mySetState).toHaveBeenCalledTimes(0);
  });
});
