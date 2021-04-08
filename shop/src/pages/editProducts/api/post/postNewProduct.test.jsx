import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import postNewProduct from './postNewProduct';
import postRequestMultipartFormData from '../../../../common/api/post/postRequestMultipartFormData';
import setClassErrorById from '../../../../common/utils/setClassErrorById';
import processInputData from '../../utils/processInputData';

jest.mock('../../../../common/api/post/postRequestMultipartFormData');
jest.mock('../../../../common/utils/setClassErrorById');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const state = {
    productName: 'Тест',
    categoryName: 'Электротовары и свет',
    productPrice: '101 РУБ.',
    productInStock: 'да',
    image: 'image',
    categoriesArray: {
      categories: [
        { category: 'Электротовары и свет', id: '1' },
        { category: 'Сад', id: '3' },
      ],
    },
  };

  test('it exucetes the functions postRequestMultipartFormData and setClassErrorById with arguments errorNewImage and errorNewImage -disabled and and return result Obj', async () => {
    const payload = processInputData(state);
    postRequestMultipartFormData.mockReturnValue(payload);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postNewProduct(state);
    expect(postRequestMultipartFormData).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledWith('errorNewImage', 'errorNewImage -disabled');
    expect(result).toEqual(payload.data);
  });

  test('it returns null if error occurand exucute setClassErrorById with arguments errorNewImage and errorNewImage', async () => {
    processInputData(state);
    postRequestMultipartFormData.mockReturnValue();
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    const result = await postNewProduct(state);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledWith('errorNewImage', 'errorNewImage');
    expect(result).toEqual(null);
  });
});
