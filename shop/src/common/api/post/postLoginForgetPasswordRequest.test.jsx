import { configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import postLoginForgetPassword from './postLoginForgetPasswordRequest';
import 'whatwg-fetch';
import serverUrl from '../../constants/urls';

configure({ adapter: new Adapter() });

describe('Items API', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const data = [];

  test('it returns true when props email s not null', async () => {
    expect.assertions(1);
    const expected = true;
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });
    const json = await postLoginForgetPassword('v.pupkin@gmail.com',
      '');
    expect(json).toEqual(expected);
    window.fetch.mockRestore();
  });

  test('it returns an object of user when props password is not null', async () => {
    expect.assertions(1);
    const expected = 'g. Mogilev, ul. Stroitelei, 78/27';
    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        ok: true,
        json: () => Promise.resolve(expected),
      };
      return Promise.resolve(fetchResponse);
    });
    const json = await postLoginForgetPassword('pul@gmail.com', '28Kris2021');
    expect(json.address).toEqual(expected);
    window.fetch.mockRestore();
  });

  test('it returns null when error occurs', async () => {
    expect.assertions(1);
    async function postLoginForgetPasswordFail(
      email, password,
    ) {
      const payload = {
        data: {
          email: 'test@mail.ru',
          password: '1',
        },
      };

      try {
        const response = await axios.post(`${serverUrl}/error`, payload);
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
    const error = await postLoginForgetPasswordFail(data.email,
      data.password);
    await expect(error).toBe(null);
    window.fetch.mockRestore();
  });
});
