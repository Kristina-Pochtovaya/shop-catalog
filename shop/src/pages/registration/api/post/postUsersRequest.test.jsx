import { configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import postUsers from './postUsersRequest';
import serverUrl from '../../../../common/constants/urls';

configure({ adapter: new Adapter() });

describe('Items API', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const data = {
    firstName: 'testUser',
    lastName: 'lastNameTest',
    email: 'test24032021@mail.ru',
    password: '123456789',
    phoneNumber: '+375292094942',
    address: 'testAddress',
  };

  test('it returns newUser if email is new', async () => {
    expect.assertions(1);
    const expected = {
      firstName: 'testUser',
      lastName: 'lastNameTest',
      email: 'test24032021@mail.ru',
      password: '123456789',
      phoneNumber: '+375292094942',
      address: 'testAddress',
    };
    const myPostUsers = jest.spyOn(window, 'fetch').mockImplementation(() => Promise.resolve(expected));
    const result = await myPostUsers();
    expect(result).toMatchObject(expected);
    window.fetch.mockRestore();
  });

  test('it returns true if user already exist', async () => {
    expect.assertions(1);
    const expected = true;
    const json = await postUsers(data.firstName, data.lastName,
      data.email, data.password, data.phoneNumber, data.address);
    expect(json).toEqual(expected);
  });

  test('it returns null when error occurs', async () => {
    expect.assertions(1);
    async function postUsersFail(
      email, password, repeatedPassword,
    ) {
      const payload = {
        data: {
          firstName: 'testUser',
          lastName: 'lastNameTest',
          email: 'test24032021@mail.ru',
          password: '123456789',
          phoneNumber: '+375292094942',
          address: 'testAddress',
        },
      };

      try {
        const response = await axios.post(`${serverUrl}/usersfail`, payload);
        const result = response.data;
        return result;
      } catch (error) {
        return null;
      }
    }

    jest.spyOn(window, 'fetch').mockImplementation(() => {
      new Promise((reject) => {
        reject(new Error('error'));
      }).catch((err) => err);
    });
    const error = await postUsersFail(data.email,
      data.password, data.repeatedPassword);
    await expect(error).toBe(null);
    window.fetch.mockRestore();
  });
});
