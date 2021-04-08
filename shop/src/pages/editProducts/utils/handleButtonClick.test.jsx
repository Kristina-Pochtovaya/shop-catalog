import handleButtonClick from './handleButtonClick';
import setClassErrorById from '../../../common/utils/setClassErrorById';
import postNewProduct from '../api/post/postNewProduct';

jest.mock('../../../common/utils/setClassErrorById');
jest.mock('../api/post/postNewProduct');

describe('test the functionality of handleButtonClick', () => {
  let history = [];
  const state = 'state';
  const mySetIsProductsUpdated = jest.fn();

  beforeEach(() => {
    history = [];
  });
  it('should push to new page if result is true and should run function setIsProductsUpdated with argumnet false if isProductsUpdated is true', async () => {
    const isProductsUpdated = true;
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    expect(history).toStrictEqual([]);
    postNewProduct.mockReturnValueOnce(true);
    await handleButtonClick(state, history, isProductsUpdated, mySetIsProductsUpdated);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(1);
    expect(mySetIsProductsUpdated).toHaveBeenCalledWith(false);
    expect(history).toStrictEqual(['/edit-products']);
  });

  it('should run setClassErrorById result is false and should run function setIsProductsUpdated with argumnet true if isProductsUpdated is false', async () => {
    const isProductsUpdated = false;
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    expect(history).toStrictEqual([]);
    postNewProduct.mockReturnValueOnce(false);
    await handleButtonClick(state, history, isProductsUpdated, mySetIsProductsUpdated);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(1);
    expect(mySetIsProductsUpdated).toHaveBeenCalledWith(true);
    expect(history).toStrictEqual([]);
  });
});
