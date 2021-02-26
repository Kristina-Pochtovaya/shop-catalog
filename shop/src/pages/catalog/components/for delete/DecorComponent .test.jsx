import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Decor from './DecorComponent';

configure({ adapter: new Adapter() });

test('should render an Decor', () => {
  const decor = shallow(<Decor />);
  expect(toJson(decor)).toMatchSnapshot();
});
