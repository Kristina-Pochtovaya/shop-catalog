import { configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import postChangeUserInformation from './postChangeUserInformation';
import serverUrl from '../../../../common/constants/urls';

configure({ adapter: new Adapter() });

describe('Items API', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const incorrectId = 1234567567424;

  const data = {
    id: 1,
    firstName: 'NEWtest',
    lastName: 'lastNameTest',
    email: 'pul@gmail.com',
    passwordNew: '12345679',
    phoneNumber: '12345679',
    address: 'testAddress',
  };

  test('it return new data for DB if id is exists', async () => {
    const DB = {
      id: 1,
      firstName: 'test',
      lastName: 'lastNameTest',
      email: 'pul@gmail.com',
      passwordNew: '12345679',
      phoneNumber: '12345679',
      address: 'testAddress',
    };
    const myPostUserPhoto = jest.spyOn(window, 'fetch').mockImplementation((user) => {
      let result = '';
      if (user.id === DB.id) {
        result = user;
      } else {
        result = DB;
      }
      return Promise.resolve(result);
    });
    const response = await myPostUserPhoto(data);
    expect(response).toEqual(data);
  });

  test('it returns null if user email is not in DB', async () => {
    expect.assertions(1);
    const response = await postChangeUserInformation(incorrectId, data.firstName,
      data.lastName, data.email, data.passwordNew, data.phoneNumber, data.address);
    expect(response).toEqual('');
  });

  test('it returns false when error occurs', async () => {
    expect.assertions(1);
    async function postUsersRolesFail(id, firstName, lastName, email, passwordNew, phoneNumber,
      address) {
      const payload = {
        data: {
          id: 1,
          firstName: 'test',
          lastName: 'lastNameTest',
          email: 'pul@gmail.com',
          passwordNew: '12345679',
          phoneNumber: '12345679',
          address: 'testAddress',
        },
      };

      try {
        const response = await axios.post(`${serverUrl}//user-informationfail`, payload);
        const result = response.data;
        return result;
      } catch (error) {
        return false;
      }
    }

    const error = await postUsersRolesFail(data.email);
    await expect(error).toBe(false);
    window.fetch.mockRestore();
  });
});
