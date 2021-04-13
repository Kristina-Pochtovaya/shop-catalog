import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postUnautherizedUser from './postUnautherizedUserRequest';
import postRequest from '../../../../common/api/post/postRequest';

jest.mock('../../../../common/api/post/postRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const payload = {
    data: {
      firstName: 'testName',
      phoneNumber: '+37529333117',
      address: 'testAddress',
    },
  };
  const firstName = 'testName';
  const phoneNumber = '+37529333117';
  const address = 'testAddress';

  test('it executes postRequest return result if no errors occurs and firstName, phone, address are null', async () => {
    const pages = {
      loginPersonalAccountReducer: {
        firstName: '',
        phone: '',
        address: '',
      },
    };
    expect(postRequest).toHaveBeenCalledTimes(0);
    postRequest.mockReturnValue(payload);
    const result = await postUnautherizedUser(firstName, phoneNumber, address, pages);
    expect(postRequest).toHaveBeenCalledTimes(1);
    expect(result).toBe(payload.data);
  });

  test('it not executes postRequest return "" if no errors occurs and only firstName, phone are null', async () => {
    const pages = {
      loginPersonalAccountReducer: {
        firstName: '',
        phone: '',
        address: 'testAddress',
      },
    };
    postRequest.mockReturnValue(payload);
    const result = await postUnautherizedUser(firstName, phoneNumber, address, pages);
    expect(postRequest).toHaveBeenCalledTimes(0);
    expect(result).toBe('');
  });

  test('it not executes postRequest return "" if no errors occurs and only firstName are null', async () => {
    const pages = {
      loginPersonalAccountReducer: {
        firstName: '',
        phone: '+37529333117',
        address: 'testAddress',
      },
    };
    postRequest.mockReturnValue(payload);
    const result = await postUnautherizedUser(firstName, phoneNumber, address, pages);
    expect(postRequest).toHaveBeenCalledTimes(0);
    expect(result).toBe('');
  });

  test('it not executes postRequest return "" if no errors occurs and only firstName, phone, address are not null', async () => {
    const pages = {
      loginPersonalAccountReducer: {
        firstName: 'testName',
        phone: '+37529333117',
        address: 'testAddress',
      },
    };
    postRequest.mockReturnValue(payload);
    const result = await postUnautherizedUser(firstName, phoneNumber, address, pages);
    expect(postRequest).toHaveBeenCalledTimes(0);
    expect(result).toBe('');
  });

  test('it return null if error occurs', async () => {
    const pages = {
      loginPersonalAccountReducer: {
        firstName: '',
        phone: '',
        address: '',
      },
    };
    postRequest.mockReturnValue();
    const result = await postUnautherizedUser(firstName, phoneNumber, address, pages);
    expect(result).toBe(null);
  });
});
