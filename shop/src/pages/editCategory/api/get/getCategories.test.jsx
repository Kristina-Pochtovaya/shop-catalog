import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import getCategories from './getCategories';

import getRequest from '../../../../common/api/get/getRequest';

jest.mock('../../../../common/api/get/getRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const res = {
    data: [{
      category: 'Электротовары и свет',
      className: 'titleElectricalGoodsAndLights',
      createdAt: '2021-03-15T09:45:16.000Z',
      id: 1,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD',
      imgAlt: 'Электротовары и свет',
      imgTitle: 'Электротовары и свет',
      link: '/electrical-goods-and-lights',
      updatedAt: '2021-03-29T11:44:40.000Z',
    },
    {
      category: 'Сад',
      className: 'titleGarden',
      createdAt: '2021-03-15T09:45:16.000Z',
      id: 2,
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAQABAAD',
      imgAlt: 'Сад',
      imgTitle: 'Сад',
      link: '/garden',
      updatedAt: '2021-03-18T12:12:11.000Z',
    },
    ],
  };
  jest.mock('../../../../common/api/get/getRequest', async () => ({
    getRequest: jest.fn().mockImplementation(() => res),
  }));
  const mySetError = jest.fn();
  const myUpdateData = jest.fn();

  test('it exucetes the functions getRequest, myUpdateData and return the array of objects', async () => {
    getRequest.mockReturnValueOnce(res);
    expect(getRequest).toHaveBeenCalledTimes(0);
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    expect(mySetError).toHaveBeenCalledTimes(0);
    const result = await getCategories(myUpdateData, mySetError);
    expect(result).toEqual(res.data);
    expect(myUpdateData).toHaveBeenCalledTimes(1);
    expect(getRequest).toHaveBeenCalledTimes(1);
    expect(mySetError).toHaveBeenCalledTimes(0);
  });

  test('it exucute  mySetError function if error occur', async () => {
    getRequest.mockReturnValueOnce('Error shold occur');
    await getCategories('', mySetError);
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    expect(getRequest).toHaveBeenCalledTimes(1);
    expect(mySetError).toHaveBeenCalledTimes(1);
  });
});
