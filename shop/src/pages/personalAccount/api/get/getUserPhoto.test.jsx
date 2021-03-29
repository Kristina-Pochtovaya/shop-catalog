import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import getUserPhoto from './getUserPhoto';

import getRequest from '../../../../common/api/get/getRequest';

jest.mock('../../../../common/api/get/getRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const res = {
    data: [{
      id: 1,
      firstName: 'NEWtest',
      lastName: 'lastNameTest',
      email: 'pul@gmail.com',
      passwordNew: '12345679',
      phoneNumber: '12345679',
      address: 'testAddress',
    },
    {
      id: 2,
      firstName: 'NEWtest',
      lastName: 'lastNameTest',
      email: 'testEmail@mail.ru',
      passwordNew: '12345679',
      phoneNumber: '12345679',
      address: 'testAddress',
    },
    ],
  };
  jest.mock('../../../../common/api/get/getRequest', async () => ({
    getRequest: jest.fn().mockImplementation(() => res),
  }));
  const email = 'testEmail@mail.ru';
  const myUpdateData = jest.fn();

  test('it exucetes the functions getRequest and myUpdateData and return the array of objects', async () => {
    getRequest.mockReturnValueOnce(res);
    expect(getRequest).toHaveBeenCalledTimes(0);
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    const result = await getUserPhoto(email, myUpdateData);
    expect(result).toEqual(res.data);
    expect(myUpdateData).toHaveBeenCalledTimes(1);
    expect(getRequest).toHaveBeenCalledTimes(1);
  });

  test('it returns null if error occur', async () => {
    getRequest.mockReturnValueOnce('Error shold occur');
    const result = await getUserPhoto(email, myUpdateData);
    expect(result).toEqual(null);
  });
});
