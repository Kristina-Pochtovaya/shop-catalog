import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import processResultAddNewCategory from './processResultAddNewCategory';
import postNewCategory from '../api/post/postNewCategory';
import setClassErrorById from '../../../common/untils/setClassErrorById';
import checkOnSymbols from '../../../common/untils/checkOnSymbols';

jest.mock('../api/post/postNewCategory');
jest.mock('../../../common/untils/setClassErrorById');
jest.mock('../../../common/untils/checkOnSymbols');

configure({ adapter: new Adapter() });

describe('Items API', () => {
  const category = 'Электротовары и свет';
  const categoryFalse = false;
  const NotNewCategory = 'Not new category';
  const symbolError = 'Prohibited symbols';
  const symbol = 'Электротовары и свет';

  const categoryName = 'Электротовары и свет';
  const image = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD';
  const titleColor = '1';
  let historyArray = [];
  const isProductsUpdated = true;
  const mySetIsProductsUpdated = jest.fn();
  jest.mock('../api/post/postNewCategory', async () => ({
    postNewCategory: jest.fn().mockImplementation(() => category),
  }));
  jest.mock('../../../common/untils/setClassErrorById', () => ({
    setClassErrorById: jest.fn().mockImplementation(() => true),
  }));
  jest.mock('../../../common/untils/checkOnSymbols', () => ({
    checkOnSymbols: jest.fn(() => true),
  }));

  afterEach(() => {
    historyArray = [];
  });

  test('it only executes setClassErrorById if newCategoryName is Prohibited symbols', async () => {
    postNewCategory.mockReturnValueOnce(category);
    checkOnSymbols.mockReturnValueOnce(symbolError);
    expect(postNewCategory).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    await processResultAddNewCategory(categoryName, image, titleColor, historyArray,
      isProductsUpdated, mySetIsProductsUpdated);
    expect(postNewCategory).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
  });

  test('it executes setIsProductsUpdated if newCategoryName is  NOT Prohibited symbols and push to /edit-category page', async () => {
    postNewCategory.mockReturnValueOnce(category);
    checkOnSymbols.mockReturnValueOnce(symbol);
    expect(postNewCategory).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    expect(historyArray).toEqual([]);
    await processResultAddNewCategory(categoryName, image, titleColor, historyArray,
      isProductsUpdated, mySetIsProductsUpdated);
    expect(postNewCategory).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(1);
    expect(historyArray).toEqual(['/edit-category']);
  });

  test('it executes setClassErrorById if result is false and NOT push to /edit-category page', async () => {
    postNewCategory.mockReturnValueOnce(categoryFalse);
    checkOnSymbols.mockReturnValueOnce(symbol);
    expect(postNewCategory).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    expect(historyArray).toEqual([]);
    await processResultAddNewCategory(categoryName, image, titleColor, historyArray,
      isProductsUpdated, mySetIsProductsUpdated);
    expect(postNewCategory).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    expect(historyArray).toEqual([]);
  });

  test('it executes setClassErrorById if result is Not new category and NOT push to /edit-category page', async () => {
    postNewCategory.mockReturnValueOnce(NotNewCategory);
    checkOnSymbols.mockReturnValueOnce(symbol);
    expect(postNewCategory).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    expect(historyArray).toEqual([]);
    await processResultAddNewCategory(categoryName, image, titleColor, historyArray,
      isProductsUpdated, mySetIsProductsUpdated);
    expect(postNewCategory).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
    expect(mySetIsProductsUpdated).toHaveBeenCalledTimes(0);
    expect(historyArray).toEqual([]);
  });
});
