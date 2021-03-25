import { configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import getUserPhoto from './getUserPhotoRequest';
import serverUrl from '../../../../common/constants/urls';

configure({ adapter: new Adapter() });

describe('Items API', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const data = [];
  const email = 'pul@gmail.com';
  const emailFail = 'puldss@gmail.com';
  const myUpdateData = jest.fn(() => true);

  test('it returns email if user was found', async () => {
    expect.assertions(1);
    const result = await getUserPhoto(email, myUpdateData);
    const resultEmail = result.filter((item) => item.email === email).map((item) => item.email).join('');
    expect(resultEmail).toEqual(email);
    window.fetch.mockRestore();
  });

  test('it returns null if user was NOT found', async () => {
    expect.assertions(1);
    const result = await getUserPhoto(emailFail, myUpdateData);
    const resultEmail = result.filter((item) => item.email === emailFail).map((item) => item.email).join('');
    expect(resultEmail).toEqual('');
  });

  test('it returns null when error occurs', async () => {
    expect.assertions(1);
    async function getUserPhotoFail(
      emailTest, updateData,
    ) {
      try {
        const response = await axios.post(`${serverUrl}/avatarfail`);
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
    const error = await getUserPhotoFail(data.emailTest, data.updateData);
    await expect(error).toBe(null);
    window.fetch.mockRestore();
  });
});
