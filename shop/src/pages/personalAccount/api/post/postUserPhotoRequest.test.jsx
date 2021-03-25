import { configure } from 'enzyme';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import postUserPhoto from './postUserPhotoRequest';
import serverUrl from '../../../../common/constants/urls';

configure({ adapter: new Adapter() });

describe('Items API', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'));

  const data = {
    email: 'pul@gmail.com',
    incorrectEmail: '1254dsfgs@mail.ru',
    avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgHXjcWFcu7ajK9jYU4HfqWMAchk79nZ2eXNV1+mI',
  };

  const mySetClassIncorrectUser = jest.fn(() => true);

  test('it return avatar if email is exists', async () => {
    const DB = {
      email: 'pul@gmail.com',
      avatar: 'data:image/png;base64,testesttertesttsrdtswftttest',
    };
    const myPostUserPhoto = jest.spyOn(window, 'fetch').mockImplementation((userAvatar) => {
      let result = '';
      if (userAvatar.email === DB.email) {
        result = DB.avatar;
      } else {
        result = userAvatar.avatar;
      }
      return Promise.resolve(result);
    });
    const response = await myPostUserPhoto(data);
    expect(response).toEqual(DB.avatar);
  });

  test('it returns false if user email is not in DB', async () => {
    expect.assertions(1);
    const response = await postUserPhoto(data.incorrectEmail, data.avatar, mySetClassIncorrectUser);
    expect(response).toEqual(false);
  });

  test('it returns false when error occurs', async () => {
    expect.assertions(1);
    async function postUsersRolesFail(email, avatar, functiontest) {
      const payload = {
        data: {
          email: 'pul@gmail.com',
          avatar: 'data:image/png;base64,testesttertesttsrdtswftttest',
        },
      };

      try {
        const response = await axios.post(`${serverUrl}/avatarfail`, payload);
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
