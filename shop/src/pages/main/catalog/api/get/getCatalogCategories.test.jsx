import getCatalogCategories from './getCatalogCategories';
import getRequest from '../../../../../common/api/get/getRequest';

jest.mock('../../../../../common/api/get/getRequest');

describe('Items API', () => {
  const mySetCategories = jest.fn();
  const mySetLoading = jest.fn();
  const mySetError = jest.fn();

  test('it executes mySetCategories and mySetLoading if no errors occur', async () => {
    expect(mySetCategories).toHaveBeenCalledTimes(0);
    expect(mySetLoading).toHaveBeenCalledTimes(0);
    expect(mySetError).toHaveBeenCalledTimes(0);
    getRequest.mockReturnValue(true);
    await getCatalogCategories(mySetCategories, mySetLoading, mySetError);
    expect(mySetCategories).toHaveBeenCalledTimes(1);
    expect(mySetLoading).toHaveBeenCalledTimes(1);
    expect(mySetError).toHaveBeenCalledTimes(0);
  });

  test('it executes setError and mySetLoading if error occurs', async () => {
    expect(mySetCategories).toHaveBeenCalledTimes(0);
    expect(mySetLoading).toHaveBeenCalledTimes(0);
    expect(mySetError).toHaveBeenCalledTimes(0);
    getRequest.mockReturnValue();
    await getCatalogCategories(mySetCategories, mySetLoading, mySetError);
    expect(mySetCategories).toHaveBeenCalledTimes(0);
    expect(mySetLoading).toHaveBeenCalledTimes(1);
    expect(mySetError).toHaveBeenCalledTimes(1);
  });
});
