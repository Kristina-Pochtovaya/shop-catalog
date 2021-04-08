import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormAddProduct from './FormAddProductComponent';

import AddCategoryProductImage from '../../editCategory/components/AddCategoryProductImage';
import handleButtonClick from '../utils/handleButtonClick';
import setClassErrorById from '../../../common/utils/setClassErrorById';

jest.mock('../../editCategory/components/AddCategoryProductImage');
jest.mock('../utils/handleButtonClick');
jest.mock('../../../common/utils/setClassErrorById');

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const myUpdateData = jest.fn();
  const updateImage = 'updateImage';
  const state = {
    categoryName: 'categoryName',
    productName: 'productName',
    productPrice: 'productPrice',
    isPriceCorrect: true,
    categoriesArray: {
      categories: [
        {
          id: 1,
          category: 'Сад',
        },
        {
          id: 3,
          category: 'Кухня',
        },
      ],
    },
  };
  const history = 'history';
  const isProductsUpdated = 'isProductsUpdated';
  const setIsProductsUpdated = 'setIsProductsUpdated';

  const setUp = () => shallow(<FormAddProduct
    updateData={myUpdateData}
    updateImage={updateImage}
    state={state}
    history={history}
    isProductsUpdated={isProductsUpdated}
    setIsProductsUpdate={setIsProductsUpdated}
  />);
  let component;

  it('should call myUpdateData with argument categoryName and productName after changing the select productsCategories and the input productsCategories and the value of select should be equal to the value of state.categoryName and the value of input should be equal to the value of state.productName', () => {
    component = setUp();
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    component.find('.productsCategories').simulate('change');
    component.find('.productNameInput').simulate('change');
    expect(myUpdateData).toHaveBeenCalledTimes(2);
    expect(myUpdateData).toHaveBeenCalledWith('categoryName', undefined);
    expect(myUpdateData).toHaveBeenCalledWith('productName', undefined);
    expect(component.find('.productsCategories').get(0).props.value).toEqual('categoryName');
    expect(component.find('.productNameInput').get(0).props.value).toEqual('productName');
  });

  it('should call myUpdateData with argument productPrice and onBlur after changing the input and after the event onBlur productPriceInput and the value of input should be equal to the value of state.productPrice', () => {
    component = setUp();
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    component.find('.productPriceInput').simulate('change');
    component.find('.productPriceInput').simulate('blur');
    expect(myUpdateData).toHaveBeenCalledTimes(2);
    expect(myUpdateData).toHaveBeenCalledWith('productPrice', undefined);
    expect(myUpdateData).toHaveBeenCalledWith('onBlur', undefined);
    expect(component.find('.productPriceInput').get(0).props.value).toEqual('productPrice');
  });

  it('should call myUpdateData with argument productInStock after changing the select imageColors', () => {
    component = setUp();
    expect(myUpdateData).toHaveBeenCalledTimes(0);
    component.find('.imageColors').simulate('change');
    expect(myUpdateData).toHaveBeenCalledWith('productInStock', undefined);
  });

  it('should run handleButtonClick function after clicking on the button addNewCategoryButton if state.isPriceCorrect is true', () => {
    component = setUp();
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    component.find('.addNewCategoryButton').simulate('click');
    expect(handleButtonClick).toHaveBeenCalledTimes(1);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
  });

  it('should run setClassErrorById function after clicking on the button addNewCategoryButton if state.isPriceCorrect is false', () => {
    state.isPriceCorrect = false;
    component = setUp();
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(0);
    component.find('.addNewCategoryButton').simulate('click');
    expect(handleButtonClick).toHaveBeenCalledTimes(0);
    expect(setClassErrorById).toHaveBeenCalledTimes(1);
  });
});
