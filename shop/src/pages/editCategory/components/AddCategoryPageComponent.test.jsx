import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddCategoryPage from './AddCategoryPageComponent';

configure({ adapter: new Adapter() });
const setUp = () => shallow(
  <AddCategoryPage />,
);
describe('rendering LoginForm component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render the content of the component if isAdminVisible is true', () => {
    expect(component.find('.addCategory-box')).toHaveLength(1);
  });

  it('should not render the content of the component if isAdminVisible is set as false', () => {
    global.open = jest.fn(() => component.setState({ isAdminVisible: false }));
    global.open();
    expect(component.find('.addCategory-box')).toHaveLength(0);
  });
});
