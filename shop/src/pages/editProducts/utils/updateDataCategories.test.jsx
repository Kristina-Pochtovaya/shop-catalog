import updateDataCategories from './updateDataCategories';

describe('should run setState with arguments', () => {
  const mySetState = jest.fn();
  const value = 'value';
  const valueIsLoading = 'valueIsLoadingarray';

  it('should run setState with argumentscategoriesArray: value, isLoading: valueIsLoading,', () => {
    updateDataCategories(mySetState, value, valueIsLoading);
    expect(mySetState).toHaveBeenCalledWith({ categoriesArray: value, isLoading: valueIsLoading });
  });
});
