import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import setPhoto from './setPhoto';

import postUserPhoto from '../api/post/postUserPhotoRequest';

jest.mock('../api/post/postUserPhotoRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const pages = {
    loginPersonalAccountReducer: [{
      id: 1,
      firstName: 'NEWtest',
      lastName: 'lastNameTest',
      clientEmail: 'pul@gmail.com',
      passwordNew: '12345679',
      phoneNumber: '12345679',
      address: 'testAddress',
    }, {
      id: 2,
      firstName: 'NEWtest',
      lastName: 'lastNameTest',
      email: 'testEmail@mail.ru',
      passwordNew: '12345679',
      phoneNumber: '12345679',
      address: 'testAddress',
    },
    ],
  };

  jest.mock('../api/post/postUserPhotoRequest', async () => ({
    postUserPhoto: jest.fn().mockImplementation(() => pages),
  }));
  const myUpdateImage = jest.fn();

  const reader = {
    error: null,
    onabort: null,
    onerror: null,
    onload: null,
    onloadend: '',
    onloadstart: null,
    onprogress: null,
    readyState: 2,
    result: 'data:image/jpeg;base64,/9j/4AAQSkZ',
    readAsDataURL: jest.fn(() => true),
  };

  test('setPhoto function add function to reader.onloadend', (done) => {
    postUserPhoto.mockReturnValueOnce(pages.loginPersonalAccountReducer);
    expect(reader.onloadend).toEqual('');
    setPhoto(reader, pages, myUpdateImage, 'test');
    expect(reader.onloadend).not.toBe('');
    done();
  });
});
