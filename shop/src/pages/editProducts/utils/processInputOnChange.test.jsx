import processCategoryOnChange from './processCategoryOnChange';

describe('should exucute the function correctly depends on arguments', () => {
  const e = {
    preventDefault: jest.fn(),
    target: {
      value: 'test',
    },
  };
  const myUpdateName = jest.fn();
  const myUpdateData = jest.fn();
  const name = 'name';

  it('should run e.preventDefault, myUpdateName and myUpdateData functions', async () => {
    expect(e.preventDefault).toHaveBeenCalledTimes(0);
    expect(myUpdateName).toHaveBeenCalledTimes(0);
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    await processCategoryOnChange(e, myUpdateName, myUpdateData, name);
    expect(e.preventDefault).toHaveBeenCalledTimes(1);
    expect(myUpdateName).toHaveBeenCalledTimes(1);
    expect(myUpdateData).toHaveBeenCalledTimes(1);
  });
});
