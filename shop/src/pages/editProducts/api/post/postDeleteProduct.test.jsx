import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postDeleteProduct from './postDeleteProduct';
import postRequest from '../../../../common/api/post/postRequest';

jest.mock('../../../../common/api/post/postRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const id = 1;
  const myUpdateAfterDelete = jest.fn();
  const mySetIsProductsUpdated = jest.fn();
  const res = {
    data: [{ id: 1 }],
  };
  jest.mock('../../../../common/api/post/postRequest', async () => ({
    postRequest: jest.fn(),
  }));

  test('it exucetes the functions postRequest  and myUpdateAfterDelete and return result', async () => {
    const isProductsUpdated = true;
    postRequest.mockReturnValue(res);
    expect(postRequest).toHaveBeenCalledTimes(0);
    expect(myUpdateAfterDelete).toHaveBeenCalledTimes(0);
    const result = await postDeleteProduct(id, mySetIsProductsUpdated, isProductsUpdated,
      myUpdateAfterDelete);
    expect(result).toEqual(res.data);
    expect(postRequest).toHaveBeenCalledTimes(1);
    expect(myUpdateAfterDelete).toHaveBeenCalledTimes(1);
  });

  test('if isProductsUpdated is true the fucntion mySetIsProductsUpdated called with false', async () => {
    const isProductsUpdated = true;
    postRequest.mockReturnValue(res);
    await postDeleteProduct(id, mySetIsProductsUpdated, isProductsUpdated,
      myUpdateAfterDelete);
    expect(mySetIsProductsUpdated).toHaveBeenCalledWith(false);
  });

  test('if isProductsUpdated is false the fucntion mySetIsProductsUpdated called with true', async () => {
    const isProductsUpdated = false;
    postRequest.mockReturnValue(res);
    await postDeleteProduct(id, mySetIsProductsUpdated, isProductsUpdated,
      myUpdateAfterDelete);
    expect(mySetIsProductsUpdated).toHaveBeenCalledWith(true);
  });

  test('it returns null if error occur and not exucute myUpdateAfterDelete function', async () => {
    postRequest.mockReturnValueOnce();
    expect(myUpdateAfterDelete).toHaveBeenCalledTimes(0);
    const result = await postDeleteProduct();
    expect(myUpdateAfterDelete).toHaveBeenCalledTimes(0);
    expect(result).toEqual(null);
  });
});
