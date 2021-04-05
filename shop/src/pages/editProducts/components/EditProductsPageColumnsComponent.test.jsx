import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditProductsPageColumns from './EditProductsPageColumnsComponent';
import getProducts from '../api/get/getProducts';
import getCategories from '../../editCategory/api/get/getCategories';

jest.mock('../api/get/getProducts');
jest.mock('../../editCategory/api/get/getCategories');

configure({ adapter: new Adapter() });
describe('rendering EditProductsPageColumns component', () => {
  const isProductsUpdated = true;
  const mySetIsProductsUpdated = jest.fn();
  const productsArray = {
    products: [{
      id: 1,
      categoryId: 3,
      category: 'Бытовая техника',
      description: 'Лампа настольная FG-217',
    }, {
      id: 2,
      categoryId: 3,
      category: 'Бытовая техника',
      description: 'Лампа настольная SURPA SL-27',
    },
    {
      id: 3,
      categoryId: 4,
      category: 'Кухня',
      description: 'Кофемашина MAUNFELD MF-720S PROv',
    },
    ],
  };

  const updateCategoriesProducts = jest.fn(() => productsArray);

  const categoriesArray = [{
    category: 'Бытовая техника',
    className: 'titleElectricalGoodsAndLights',
    id: 3,
  },
  {
    category: 'Кухня',
    className: 'titleKitchen',
    id: 4,
  },
  ];

  jest.mock('../api/get/getProducts', async () => ({
    getProducts: jest.fn().mockImplementation(() => categoriesArray),
  }));
  jest.mock('../../editCategory/api/get/getCategories', () => ({
    getCategories: jest.fn().mockImplementation(() => true),
  }));
  const component = shallow(
    <EditProductsPageColumns
      isProductsUpdated={isProductsUpdated}
      setIsProductsUpdated={mySetIsProductsUpdated}
    />,
  );

  it('should Loading div at first rendering', async () => {
    component.setState({ isLoadingProducts: false });
    expect(component.find('.-isLoading')).toHaveLength(1);
    expect(component.find('ButtonDeleteCategoryProducts')).toHaveLength(0);
    expect(component.find('IsEditActiveColumnsComponent')).toHaveLength(0);
    expect(component.find('IsEditNotActiveColumnsComponent')).toHaveLength(0);
    expect(component.find('ButtonEditProducts')).toHaveLength(0);
  });

  it('should render IsEditNotActiveColumnsComponent divs and delete buttons if products are loaded and no render edit buttons if category array is not loaded', async () => {
    getProducts.mockReturnValueOnce(productsArray);
    component.setState({
      productsArray,
    });
    const result = getProducts(updateCategoriesProducts, mySetIsProductsUpdated);
    expect(result).toBe(productsArray);
    component.setState({ isLoadingProducts: true });
    component.setState({ isLoadingCategories: true });
    expect(component.find('.isLoading')).toHaveLength(0);
    expect(component.find('ButtonDeleteCategoryProducts')).toHaveLength(3);
    expect(component.find('IsEditNotActiveColumnsComponent')).toHaveLength(3);
    expect(component.find('ButtonEditProducts')).toHaveLength(0);
  });

  it('should render edit buttons if category array is loaded and isEditActiveId is equal to ones of product id and ', async () => {
    getProducts.mockReturnValueOnce(productsArray);
    getCategories.mockReturnValueOnce(categoriesArray);
    component.setState({
      productsArray,
    });
    component.setState({
      categoriesArray,
    });
    const result = getProducts(updateCategoriesProducts, mySetIsProductsUpdated);
    expect(result).toBe(productsArray);
    component.setState({ isLoadingProducts: true });
    component.setState({ isLoadingCategories: true });
    expect(component.find('.isLoading')).toHaveLength(0);
    expect(component.find('ButtonDeleteCategoryProducts')).toHaveLength(3);
    expect(component.find('IsEditNotActiveColumnsComponent')).toHaveLength(3);
  });

  it('should render one IsEditActiveColumnsComponent if  isEditActiveId is equal to ones of product id and isEditActive is true', async () => {
    getProducts.mockReturnValueOnce(productsArray);
    getCategories.mockReturnValueOnce(categoriesArray);
    component.setState({
      productsArray,
    });
    component.setState({
      categoriesArray,
    });
    component.setState({ isEditActive: true });
    component.setState({ isEditActiveId: 1 });
    const result = getProducts(updateCategoriesProducts, mySetIsProductsUpdated);
    expect(result).toBe(productsArray);
    component.setState({ isLoadingProducts: true });
    component.setState({ isLoadingCategories: true });
    expect(component.find('IsEditNotActiveColumnsComponent')).toHaveLength(2);
    expect(component.find('IsEditActiveColumnsComponent')).toHaveLength(1);
  });

  it('should render just  IsEditActiveColumnsComponents if  isEditActiveId is NOT equal to ones of product id and isEditActive is true', async () => {
    getProducts.mockReturnValueOnce(productsArray);
    getCategories.mockReturnValueOnce(categoriesArray);
    component.setState({
      productsArray,
    });
    component.setState({
      categoriesArray,
    });
    component.setState({ isEditActive: true });
    component.setState({ isEditActiveId: 15 });
    const result = getProducts(updateCategoriesProducts, mySetIsProductsUpdated);
    expect(result).toBe(productsArray);
    component.setState({ isLoadingProducts: true });
    component.setState({ isLoadingCategories: true });
    expect(component.find('IsEditNotActiveColumnsComponent')).toHaveLength(3);
    expect(component.find('IsEditActiveColumnsComponent')).toHaveLength(0);
  });

  it('should render just  IsEditActiveColumnsComponents if  isEditActiveId is equal to ones of product id, but isEditActive is false', async () => {
    getProducts.mockReturnValueOnce(productsArray);
    getCategories.mockReturnValueOnce(categoriesArray);
    component.setState({
      productsArray,
    });
    component.setState({
      categoriesArray,
    });
    component.setState({ isEditActive: false });
    component.setState({ isEditActiveId: 1 });
    const result = getProducts(updateCategoriesProducts, mySetIsProductsUpdated);
    expect(result).toBe(productsArray);
    component.setState({ isLoadingProducts: true });
    component.setState({ isLoadingCategories: true });
    expect(component.find('IsEditNotActiveColumnsComponent')).toHaveLength(3);
    expect(component.find('IsEditActiveColumnsComponent')).toHaveLength(0);
  });

  it('should render just  IsEditActiveColumnsComponents if  isEditActiveId is not equal to ones of product id and isEditActive is false', async () => {
    getProducts.mockReturnValueOnce(productsArray);
    getCategories.mockReturnValueOnce(categoriesArray);
    component.setState({
      productsArray,
    });
    component.setState({
      categoriesArray,
    });
    component.setState({ isEditActive: false });
    component.setState({ isEditActiveId: 15 });
    const result = getProducts(updateCategoriesProducts, mySetIsProductsUpdated);
    expect(result).toBe(productsArray);
    component.setState({ isLoadingProducts: true });
    component.setState({ isLoadingCategories: true });
    expect(component.find('IsEditNotActiveColumnsComponent')).toHaveLength(3);
    expect(component.find('IsEditActiveColumnsComponent')).toHaveLength(0);
  });
});
