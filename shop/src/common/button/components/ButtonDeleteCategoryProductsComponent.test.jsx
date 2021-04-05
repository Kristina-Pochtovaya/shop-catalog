import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonDeleteCategoryProducts from './ButtonDeleteCategoryProductsComponent';

import postDeleteCategory from '../../../pages/editCategory/api/post/postDeleteCategory';
import postDeleteProduct from '../../../pages/editProducts/api/post/postDeleteProduct';

jest.mock('../../../pages/editCategory/api/post/postDeleteCategory');
jest.mock('../../../pages/editProducts/api/post/postDeleteProduct');

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const item = {
    id: 1,
  };
  let category = '';
  const myUpdateAfterDelete = jest.fn();
  const mySetIsProductsUpdated = jest.fn();
  const isProductsUpdated = true;

  const setUp = () => shallow(<ButtonDeleteCategoryProducts
    item={item}
    category={category}
    updateAfterDelete={myUpdateAfterDelete}
    setIsProductsUpdated={mySetIsProductsUpdated}
    isProductsUpdated={isProductsUpdated}
  />);
  let component;

  it('should call postDeleteCategory with item.id and myUpdateAfterDelete arguments,set classname as deleteCategoryButton and render the text Удалить if category is true', () => {
    category = true;
    component = setUp();
    expect(postDeleteCategory).toHaveBeenCalledTimes(0);
    expect(postDeleteProduct).toHaveBeenCalledTimes(0);
    component.simulate('click');
    expect(postDeleteCategory).toHaveBeenCalledTimes(1);
    expect(postDeleteProduct).toHaveBeenCalledTimes(0);
    expect(postDeleteCategory).toHaveBeenCalledWith(item.id, myUpdateAfterDelete);
    expect(component.find('.deleteCategoryButton')).toHaveLength(1);
    expect(component.find('.deleteProductsButton')).toHaveLength(0);
    expect(component.text()).toBe('Удалить');
  });

  it('should call postDeleteProduct with item.id, setIsProductsUpdated, isProductsUpdated and myUpdateAfterDelete arguments,set classname as deleteProductsButton if category is false', () => {
    category = false;
    component = setUp();
    expect(postDeleteProduct).toHaveBeenCalledTimes(0);
    expect(postDeleteCategory).toHaveBeenCalledTimes(0);
    component.simulate('click');
    expect(postDeleteProduct).toHaveBeenCalledTimes(1);
    expect(postDeleteCategory).toHaveBeenCalledTimes(0);
    expect(postDeleteProduct).toHaveBeenCalledWith(item.id, mySetIsProductsUpdated,
      isProductsUpdated, myUpdateAfterDelete);
    expect(component.find('.deleteCategoryButton')).toHaveLength(0);
    expect(component.find('.deleteProductsButton')).toHaveLength(1);
  });
});
