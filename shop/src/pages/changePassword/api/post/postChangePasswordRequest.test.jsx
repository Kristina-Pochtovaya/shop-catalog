import { configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import postChangePasswordRequest from './postChangePasswordRequest';
import serverUrl from '../../../../common/constants/urls';

configure({ adapter: new Adapter() });

describe('Items API', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const data = [];

  const clientEmailCorrect = 'pul@gmail.com';
  const PasswordCorrect = '28Kris2021';
  const PasswordCorrectRepeat = '28Kris2021';
  const clientEmailFail = 'pulfdsfs@gmail.com';
  const PasswordFail = '11128Kris2021';

  test('it returns true', async () => {
    expect.assertions(1);
    const expected = true;
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });
    const json = await postChangePasswordRequest(clientEmailCorrect,
      PasswordCorrect, PasswordCorrectRepeat);
    expect(json).toEqual(expected);
    window.fetch.mockRestore();
  });

  test('it returns incorrectUserOrPassword if user is incorrect', async () => {
    expect.assertions(1);
    const expected = 'incorrectUserOrPassword';
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });
    const jsonFailEmail = await postChangePasswordRequest(clientEmailFail,
      PasswordCorrect, PasswordCorrectRepeat);
    expect(jsonFailEmail).toEqual(expected);
    window.fetch.mockRestore();
  });

  test('it will be zero assertions if Repeatedpassword is not equal to password', async () => {
    expect.assertions(0);
    await postChangePasswordRequest(clientEmailCorrect,
      PasswordCorrect, PasswordFail);
  });

  test('it returns null when error occurs', async () => {
    expect.assertions(1);
    async function postBasketItemsRequestFail(
      email, password, repeatedpassword,
    ) {
      const payload = {
        data: {
          email: 'test@mail.ru',
          password: '123456789',
          repeatedPassword: '123456789s',
        },
      };

      try {
        const response = await axios.post(`${serverUrl}/change-passwordssfs`, payload);
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
    const error = await postBasketItemsRequestFail(data.email,
      data.password, data.repeatedPassword);
    await expect(error).toBe(null);
    window.fetch.mockRestore();
  });
});
