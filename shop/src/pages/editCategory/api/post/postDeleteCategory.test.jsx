import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postDeleteCategory from './postDeleteCategory';
import postRequest from '../../../../common/api/post/postRequest';

jest.mock('../../../../common/api/post/postRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const id = 1;
  const myUpdateAfterDelete = jest.fn();
  const res = {
    data: [{ result: true }],
  };
  jest.mock('../../../../common/api/post/postRequest', async () => ({
    postRequest: jest.fn(),
  }));

  test('it exucetes the functions postRequest  and myUpdateAfterDelete and return true', async () => {
    postRequest.mockReturnValue(res);
    expect(postRequest).toHaveBeenCalledTimes(0);
    expect(myUpdateAfterDelete).toHaveBeenCalledTimes(0);
    const result = await postDeleteCategory(id, myUpdateAfterDelete);
    expect(result).toEqual(res.data);
    expect(postRequest).toHaveBeenCalledTimes(1);
    expect(myUpdateAfterDelete).toHaveBeenCalledTimes(1);
  });

  test('it returns null if error occur and not exucute myUpdateAfterDelete function', async () => {
    postRequest.mockReturnValueOnce();
    expect(myUpdateAfterDelete).toHaveBeenCalledTimes(0);
    const result = await postDeleteCategory();
    expect(myUpdateAfterDelete).toHaveBeenCalledTimes(0);
    expect(result).toEqual(null);
  });
});
