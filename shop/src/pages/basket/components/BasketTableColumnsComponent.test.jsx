import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BasketTableColumns from './BasketTableColumnsComponent';

configure({ adapter: new Adapter() });
describe('rendering Basket components', () => {
  const items = {
    catalogItemsReducer: [
      {
        id: 1,
        price: 101,
        counter: 3,
      },
      {
        id: 2,
        price: 11,
        counter: 2,
      },
      {
        id: 3,
        price: 111,
        counter: 1,
      },
    ],
  };
  const myOnIncrease = jest.fn();
  const myOnDecrease = jest.fn();
  const myOnDelete = jest.fn();
  let component;
  beforeEach(() => {
    component = shallow(<BasketTableColumns
      items={items}
      onIncrease={myOnIncrease}
      onDecrease={myOnDecrease}
      OnDelete={myOnDelete}
    />);
  });

  it('should render 3 li tags', () => {
    expect(component.find('li')).toHaveLength(3);
  });

  it('should render the the result of item.price * item.counter', () => {
    expect(component.find('.columnAmount').at(1).text()).toBe('22 руб.');
  });

  it('should run myOnIncrease function after clicking on .plus div', () => {
    expect(myOnIncrease).toHaveBeenCalledTimes(0);
    component.find('.plus').at(0).simulate('click');
    expect(myOnIncrease).toHaveBeenCalledTimes(1);
    expect(myOnDecrease).toHaveBeenCalledTimes(0);
    expect(myOnDelete).toHaveBeenCalledTimes(0);
  });

  it('should run myOnDecrease function after clicking on .minus div', () => {
    expect(myOnDecrease).toHaveBeenCalledTimes(0);
    component.find('.minus').at(1).simulate('click');
    expect(myOnIncrease).toHaveBeenCalledTimes(0);
    expect(myOnDecrease).toHaveBeenCalledTimes(1);
    expect(myOnDelete).toHaveBeenCalledTimes(0);
  });

  it('should run myOnDelete function after clicking on .deleteOneItem div', () => {
    expect(myOnDelete).toHaveBeenCalledTimes(0);
    component.find('.deleteOneItem').at(2).simulate('click');
    expect(myOnIncrease).toHaveBeenCalledTimes(0);
    expect(myOnDecrease).toHaveBeenCalledTimes(0);
    expect(myOnDelete).toHaveBeenCalledTimes(1);
  });
});
