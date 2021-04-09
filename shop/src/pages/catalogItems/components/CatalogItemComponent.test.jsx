import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CatalogItem from './CatalogItemComponent';
import handleButtonOnClick from '../utils/handleButtonOnClickCatalogItems';

jest.mock('../utils/handleButtonOnClickCatalogItems');

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const product = {
    id: 1,
    inStock: true,
    description: 'description',
    price: 'price',
  };
  const img = 'image';
  const mySetPopupBasketctive = jest.fn();
  const myOnAdd = jest.fn();

  let component;
  const setUp = () => shallow(<CatalogItem
    product={product}
    img={img}
    setPopupBasketctive={mySetPopupBasketctive}
    onAdd={myOnAdd}
  />);
  beforeEach(() => {
    component = setUp();
  });

  it('rendering props in component correctly', () => {
    expect(component.find('.itemName').text()).toBe('description');
    expect(component.find('.imgItemCard').text()).toBe('image');
  });

  it('rendering classname correctly depends on props value', () => {
    expect(component.find('.-yes')).toHaveLength(1);
    product.inStock = false;
    component = setUp();
    expect(component.find('.-yes')).toHaveLength(0);
  });

  it('run handleButtonOnClick function after clicking on the button .busketButton', () => {
    expect(handleButtonOnClick).toHaveBeenCalledTimes(0);
    component.find('.busketButton').simulate('click');
    expect(handleButtonOnClick).toHaveBeenCalledTimes(1);
  });
});
