import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import getImages from './getImages';

import getRequest from './getRequest';

jest.mock('./getRequest');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const res = {
    data: {
      msg: 'msg1',
    },
  };
  const mySetImages = jest.fn();
  const mySetFallback = jest.fn();
  console.log = jest.fn();

  test('it exucetes the function mySetFallback if no errors and res.data.files is null', async () => {
    res.data.files = '';
    getRequest.mockReturnValueOnce(res);
    expect(getRequest).toHaveBeenCalledTimes(0);
    expect(mySetFallback).toHaveBeenCalledTimes(0);
    expect(mySetImages).toHaveBeenCalledTimes(0);
    await getImages(mySetImages, mySetFallback);
    expect(mySetFallback).toHaveBeenCalledTimes(1);
    expect(getRequest).toHaveBeenCalledTimes(1);
    expect(mySetImages).toHaveBeenCalledTimes(0);
    expect(console.log).toHaveBeenCalledTimes(0);
  });

  test('it exucetes the function mySetImages if no errors and res.data.files is not null', async () => {
    res.data.files = 'files1';
    getRequest.mockReturnValueOnce(res);
    expect(getRequest).toHaveBeenCalledTimes(0);
    expect(mySetFallback).toHaveBeenCalledTimes(0);
    expect(mySetImages).toHaveBeenCalledTimes(0);
    await getImages(mySetImages, mySetFallback);
    expect(mySetFallback).toHaveBeenCalledTimes(0);
    expect(getRequest).toHaveBeenCalledTimes(1);
    expect(mySetImages).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(0);
  });

  test('it doesn\'t exucute  if mySetFallback and mySetImages, just console.log is executed if error occurs', async () => {
    getRequest.mockReturnValueOnce('Error shold occur');
    await getImages(mySetImages, mySetFallback);
    expect(mySetFallback).toHaveBeenCalledTimes(0);
    expect(mySetImages).toHaveBeenCalledTimes(0);
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
