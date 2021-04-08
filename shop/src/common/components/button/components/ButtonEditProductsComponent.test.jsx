import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonEditProducts from './ButtonEditProductsComponent';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const category = 'category';
  const product = {
    id: 1,
  };
  let IsEditButtonVisible = '';
  let isEditActive = '';
  let isEditActiveId = '';
  const myHandleButtonClick = jest.fn();

  const setUp = () => shallow(<ButtonEditProducts
    category={category}
    product={product}
    handleButtonOnClick={myHandleButtonClick}
    IsEditButtonVisible={IsEditButtonVisible}
    isEditActive={isEditActive}
    isEditActiveId={isEditActiveId}
  />);
  let component;

  it('should call handleButtonOnClick with product argument and render the text Сохранить', () => {
    IsEditButtonVisible = true;
    isEditActive = true;
    isEditActiveId = 1;
    component = setUp();
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
    component.find('.editProductsButton').simulate('click');
    expect(myHandleButtonClick).toHaveBeenCalledTimes(1);
    expect(myHandleButtonClick).toHaveBeenCalledWith(product);
    expect(component.text()).toBe('Сохранить');
  });

  it('should call handleButtonOnClick with product and category arguments and render the text Изменить if IsEditButtonVisible is false', () => {
    IsEditButtonVisible = false;
    isEditActive = true;
    isEditActiveId = 1;
    component = setUp();
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
    component.find('.editProductsButton').simulate('click');
    expect(myHandleButtonClick).toHaveBeenCalledTimes(1);
    expect(myHandleButtonClick).toHaveBeenCalledWith(product, category);
    expect(component.text()).toBe('Изменить');
  });

  it('should call handleButtonOnClick with product and category arguments and render the text Изменить if isEditActive is false', () => {
    IsEditButtonVisible = true;
    isEditActive = false;
    isEditActiveId = 1;
    component = setUp();
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
    component.find('.editProductsButton').simulate('click');
    expect(myHandleButtonClick).toHaveBeenCalledTimes(1);
    expect(myHandleButtonClick).toHaveBeenCalledWith(product, category);
    expect(component.text()).toBe('Изменить');
  });

  it('should call handleButtonOnClick with product and category arguments and render the text Изменить if isEditActiveId is not equal product.id', () => {
    IsEditButtonVisible = true;
    isEditActive = true;
    isEditActiveId = 5;
    component = setUp();
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
    component.find('.editProductsButton').simulate('click');
    expect(myHandleButtonClick).toHaveBeenCalledTimes(1);
    expect(myHandleButtonClick).toHaveBeenCalledWith(product, category);
    expect(component.text()).toBe('Изменить');
  });

  it('should call handleButtonOnClick with product and category arguments and render the text Изменить if isEditActiveId is not equal product.id and IsEditButtonVisible is false and isEditActive is false too', () => {
    IsEditButtonVisible = false;
    isEditActive = false;
    isEditActiveId = 5;
    component = setUp();
    expect(myHandleButtonClick).toHaveBeenCalledTimes(0);
    component.find('.editProductsButton').simulate('click');
    expect(myHandleButtonClick).toHaveBeenCalledTimes(1);
    expect(myHandleButtonClick).toHaveBeenCalledWith(product, category);
    expect(component.text()).toBe('Изменить');
  });
});
