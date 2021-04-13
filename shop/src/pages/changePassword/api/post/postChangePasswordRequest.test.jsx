import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postChangePasswordRequest from './postChangePasswordRequest';
import postRequest from '../../../../common/api/post/postRequest';

jest.mock('../../../../common/api/post/postRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const payload = {
    data: {
      email: 'test@mail.ru',
      password: '123456789',
      newPaswword: '123456789',
    },
  };
  const email = 'test@mail.ru';
  const password = '123456789';
  const newPaswword = '123456789';

  test('it executes postRequest return result if no errors occurs', async () => {
    expect(postRequest).toHaveBeenCalledTimes(0);
    postRequest.mockReturnValue(payload);
    const result = await postChangePasswordRequest(email, password, newPaswword);
    expect(postRequest).toHaveBeenCalledTimes(1);
    expect(result).toBe(payload.data);
  });

  test('it return null if error occurs', async () => {
    postRequest.mockReturnValue();
    const result = await postChangePasswordRequest(email, password, newPaswword);
    expect(result).toBe(null);
  });
});
