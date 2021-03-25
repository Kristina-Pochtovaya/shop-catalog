import { configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import postUsersRoles from './postUsersRoles';
import serverUrl from '../../../../common/constants/urls';

configure({ adapter: new Adapter() });

describe('Items API', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const data = {
    email: 'pul@gmail.com',
    incorrectEmail: '1254dsfgs@mail.ru',
  };

  test('it user role if his email is in DB', async () => {
    expect.assertions(1);
    const expected = {
      email: 'pul@gmail.com',
      role: 'authorized',
    };
    const response = await postUsersRoles(data.email);
    expect(response).toEqual(expected.role);
    window.fetch.mockRestore();
  });

  test('it returns null if user email is not in DB', async () => {
    expect.assertions(1);
    const response = await postUsersRoles(data.incorrectEmail);
    expect(response).toEqual('');
  });

  test('it returns null when error occurs', async () => {
    expect.assertions(1);
    async function postUsersRolesFail(email) {
      const payload = {
        data: {
          email: 'test25032021@mail.ru',
        },
      };

      try {
        const response = await axios.post(`${serverUrl}/user-rolefail`, payload);
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
    const error = await postUsersRolesFail(data.email);
    await expect(error).toBe(null);
    window.fetch.mockRestore();
  });
});
