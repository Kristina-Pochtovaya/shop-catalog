import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postNewCategory from './postNewCategory';
import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import transliterate from '../../../../common/untils/transliterate';
import setClassErrorById from '../../../../common/untils/setClassErrorById';

jest.mock('../../../../common/api/post/postRequestMultipartFormData');
jest.mock('../../../../common/untils/transliterate');
jest.mock('../../../../common/untils/setClassErrorById');

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
  jest.mock('../../../../common/untils/transliterate', () => ({
    transliterate: jest.fn().mockImplementation(() => true),
  }));
  jest.mock('../../../../common/untils/setClassErrorById', () => ({
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
