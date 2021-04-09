import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BasketTable from './BasketTableComponent';

configure({ adapter: new Adapter() });
describe('rendering Basket components', () => {
  const items = {
    catalogItemsReducer: [
      {
        price: 101,
        counter: 3,
      },
      {
        price: 11,
        counter: 2,
      },
      {
        price: 111,
        counter: 1,
      },
    ],
  };
  const myOnDeleteAll = jest.fn();
  let component;
  beforeEach(() => {
    component = shallow(<BasketTable
      items={items}
      OnDeleteAll={myOnDeleteAll}
    />);
  });

  it('should execute  myOnDeleteAll function after clicking on the button .deleteAllSpan', () => {
    expect(myOnDeleteAll).toHaveBeenCalledTimes(0);
    component.find('.deleteAllSpan').simulate('click');
    expect(myOnDeleteAll).toHaveBeenCalledTimes(1);
  });

  it('should render the sum of all items (price * counter)', () => {
    expect(component.find('.resultSum').text()).toBe('Итого: 436 руб');
  });
});
