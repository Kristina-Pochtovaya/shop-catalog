import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postUsers from './postUsersRequest';
import postRequest from '../../../../common/api/post/postRequest';

jest.mock('../../../../common/api/post/postRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const payload = {
    data: {
      firstName: 'testName',
      lastName: 'testLastName',
      email: 'test@mail.ru',
      password: '123456789',
      phoneNumber: '+375291234567',
      address: 'testAddress',
    },
  };
  const firstName = 'testName';
  const lastName = 'testLastName';
  const email = 'test@mail.ru';
  const password = '123456789';
  const phoneNumber = '+375291234567';
  const address = 'testAddress';

  test('it executes postRequest return result if no errors occurs', async () => {
    expect(postRequest).toHaveBeenCalledTimes(0);
    postRequest.mockReturnValue(payload);
    const result = await postUsers(firstName, lastName, email, password, phoneNumber, address);
    expect(postRequest).toHaveBeenCalledTimes(1);
    expect(result).toBe(payload.data);
  });

  test('it return null if error occurs', async () => {
    postRequest.mockReturnValue();
    const result = await postUsers(firstName, lastName, email, password, phoneNumber, address);
    expect(result).toBe(null);
  });
});
