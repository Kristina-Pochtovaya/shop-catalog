import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditProductsPage from './EditProductsPageComponent';

configure({ adapter: new Adapter() });
describe('rendering EditProductsPage component', () => {
  it('should not render the content of the component by default', () => {
    const pages = {
      loginPersonalAccountReducer: {
        personAccountIsVisible: false,
      },
    };
    const component = shallow(
      <EditProductsPage pages={pages} />,
    );
    expect(component.find('.editProducts-box')).toHaveLength(0);
  });

  it('should not render the content of the component if personAccountIsVisible is set as true', () => {
    const pages = {
      loginPersonalAccountReducer: {
        personAccountIsVisible: true,
      },
    };
    const component = shallow(
      <EditProductsPage pages={pages} />,
    );
    expect(component.find('.editProducts-box')).toHaveLength(1);
  });
});
