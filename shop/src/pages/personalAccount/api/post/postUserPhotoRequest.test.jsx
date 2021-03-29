import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postUserPhoto from './postUserPhotoRequest';

import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import setClassErrorById from '../../../../common/untils/setClassErrorById';

jest.mock('../../../../common/api/post/postRequestMultipartFormData');
jest.mock('../../../../common/untils/setClassErrorById');

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
  jest.mock('../../../../common/untils/setClassErrorById', () => ({
    setClassErrorById: jest.fn().mockImplementation(() => true),
  }));

  test('it exucetes the functions postRequestMultipartFormData and setClassErrorById and return the array of objects', async () => {
    postRequestMultipartFormData.mockReturnValueOnce(res);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postUserPhoto();
    expect(result).toEqual(res.data);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(1);
  });

  test('it returns false if error occur and execute fucntion setClassErrorById', async () => {
    postRequestMultipartFormData.mockReturnValueOnce();
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postUserPhoto();
    expect(result).toEqual(false);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
  });
});
