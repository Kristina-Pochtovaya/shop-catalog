import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddCategoryPage from './AddCategoryPageComponent';

configure({ adapter: new Adapter() });
describe('rendering LoginForm component', () => {
  it('should not render the content of the component by default', () => {
    const pages = {
      loginPersonalAccountReducer: {
        personAccountIsVisible: false,
      },
    };
    const component = shallow(
      <AddCategoryPage pages={pages} />,
    );
    expect(component.find('.addCategory-box')).toHaveLength(0);
  });

  it('should not render the content of the component if personAccountIsVisible is set as true', () => {
    const pages = {
      loginPersonalAccountReducer: {
        personAccountIsVisible: true,
      },
    };
    const component = shallow(
      <AddCategoryPage pages={pages} />,
    );
    expect(component.find('.addCategory-box')).toHaveLength(1);
  });
});
