import processHandleButtonOnEdit from './processHandleButtonOnEdit';
import postProducts from '../api/post/postProducts';

jest.mock('../api/post/postProducts');

describe('should exucute the function correctly depends on arguments', () => {
  const setState = 'setState';
  const state = 'state';
  const product = 'product';
  const myUpdateData = jest.fn();
  const mySetIsProductsUpdated = jest.fn();
  jest.mock('../api/post/postProducts', async () => ({
    postProducts: jest.fn(),
  }));

  it('should run myUpdateData, postProducts and mySetIsProductsUpdated', async () => {
    const isProductsUpdated = true;

    expect(myUpdateData).toHaveBeenCalledTimes(0);
    expect(postProducts).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    await processHandleButtonOnEdit(setState, state, product, myUpdateData, isProductsUpdated,
      mySetIsProductsUpdated);
    expect(myUpdateData).toHaveBeenCalledTimes(1);
    expect(postProducts).toHaveBeenCalledTimes(1);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(1);
  });

  it('mySetIsProductsUpdated should be called with argument false if isProductsUpdated is true', async () => {
    const isProductsUpdated = true;

    await processHandleButtonOnEdit(setState, state, product, myUpdateData, isProductsUpdated,
      mySetIsProductsUpdated);
    expect(mySetIsProductsUpdated).toHaveBeenCalledWith(false);
  });

  it('mySetIsProductsUpdated should be called with argument true if isProductsUpdated is false', async () => {
    const isProductsUpdated = false;

    await processHandleButtonOnEdit(setState, state, product, myUpdateData, isProductsUpdated,
      mySetIsProductsUpdated);
    expect(mySetIsProductsUpdated).toHaveBeenCalledWith(true);
  });
});
