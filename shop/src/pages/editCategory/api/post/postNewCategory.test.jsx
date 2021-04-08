import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postNewCategory from './postNewCategory';
import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import transliterate from '../../../../common/utils/transliterate';
import setClassErrorById from '../../../../common/utils/setClassErrorById';

jest.mock('../../../../common/api/post/postRequestMultipartFormData');
jest.mock('../../../../common/utils/transliterate');
jest.mock('../../../../common/utils/setClassErrorById');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const res = {
    data: [{
      category: 'Электротовары и свет',
      id: 1,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD',
    },
    ],
  };
  const category = 'Электротовары и свет';
  const categoryError = null;
  const image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD';
  const color = '1';
  jest.mock('../../../../common/api/post/postRequestMultipartFormData', async () => ({
    postRequestMultipartFormData: jest.fn().mockImplementation(() => res),
  }));
  jest.mock('../../../../common/utils/transliterate', () => ({
    transliterate: jest.fn().mockImplementation(() => true),
  }));
  jest.mock('../../../../common/utils/setClassErrorById', () => ({
    setClassErrorById: jest.fn().mockImplementation(() => true),
  }));

  test('it exucetes the functions postRequestMultipartFormData and setClassErrorById amnd return categoryName', async () => {
    postRequestMultipartFormData.mockReturnValueOnce(res);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postNewCategory(category, image, color);
    expect(result).toEqual(res.data.toString());
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
  });

  test('it returns null if error occur and execute fucntion setClassErrorById', async () => {
    postRequestMultipartFormData.mockReturnValueOnce(null);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postNewCategory();
    expect(result).toEqual(null);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
  });
});
