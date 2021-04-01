import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import setImage from './setImage';

configure({ adapter: new Adapter() });

describe('Items API', () => {
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

  const myUpdateData = jest.fn();
  const myUpdateCategoryImage = jest.fn();

  test('setPhoto function add function to reader.onloadend', () => {
    expect(reader.onloadend).toEqual('');
    setImage(reader, myUpdateData, myUpdateCategoryImage, 'test');
    expect(reader.onloadend).not.toBe('');
  });
});
