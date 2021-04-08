import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrdersHistoryColumnsTable from './OrdersHistoryColumnsTableComponent';
import noImage from '../../../common/assets/personal-account/noImage.png';

configure({ adapter: new Adapter() });
describe('rendering OrdersHistoryColumnsTable component', () => {
  const ordersArray = [
    {
      id: 1,
      image: 'image1',
      description: 'description1',
      counter: 'counter1',
      sum: 'sum1',
    },
    {
      id: 2,
      image: 'image2',
      description: 'description2',
      counter: 'counter2',
      sum: 'sum2',
    },
  ];
  let component;
  const setUp = () => shallow(<OrdersHistoryColumnsTable ordersArray={ordersArray} />);

  beforeEach(() => {
    component = setUp();
  });

  it('should render properties of ordersArray correctly', () => {
    expect(component.find('li')).toHaveLength(2);
    expect(component.find('.columnGoodNameTitle').at(1).text()).toBe('description2');
    expect(component.find('.columnQuantity').at(0).text()).toBe('counter1');
    expect(component.find('.orderImage').at(1).prop('src')).toBe('image2');
  });

  it('should render the image noImage if src is null', () => {
    ordersArray.filter((item) => item.id === 2).map((item) => {
      const element = item;
      element.image = null;
      return element;
    });
    component = setUp();
    expect(component.find('.orderImage').at(1).prop('src')).toBe(noImage);
  });
});
