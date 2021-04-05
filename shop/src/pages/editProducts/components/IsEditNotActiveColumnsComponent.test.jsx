import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IsEditNotActiveColumnsComponent from './IsEditNotActiveColumnsComponent';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const product = {
    image: 'image',
    categoryId: 1,
    id: 1,
    description: 'description',
    price: 'price',
    inStock: 1,
  };

  const categoriesArray = [{
    id: 1,
    category: 'category',
  },
  {
    id: 2,
    category: 'category',
  },
  {
    id: 3,
    category: 'category',
  }];

  const setUp = () => shallow(<IsEditNotActiveColumnsComponent
    product={product}
    categoriesArray={categoriesArray}
  />);
  let component;

  it('should render ImagePhotoProducts with classname as imageProducts and render the valu as да for paragraph inStockString', () => {
    component = setUp();
    expect(component.find('.imageProducts')).toHaveLength(1);
    expect(component.find('.imageProductsEmpty')).toHaveLength(0);
    expect(component.find('.inStockString').text()).toBe('да');
  });

  it('should render ImagePhotoProducts with classname as imageProductsEmpty and render the valu as нет for paragraph inStockString', () => {
    product.image = '';
    product.inStock = 0;
    component = setUp();
    expect(component.find('.imageProducts')).toHaveLength(0);
    expect(component.find('.imageProductsEmpty')).toHaveLength(1);
    expect(component.find('.inStockString').text()).toBe('нет');
  });
});
