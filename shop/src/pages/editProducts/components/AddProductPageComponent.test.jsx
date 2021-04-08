import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddProductPage from './AddProductPageComponent';
import getCategories from '../../editCategory/api/get/getCategories';

jest.mock('../../editCategory/api/get/getCategories');

configure({ adapter: new Adapter() });
describe('rendering AddProductPage component', () => {
  const history = 'history';
  const isProductsUpdated = 'isProductsUpdated';
  const setIsProductsUpdated = 'setIsProductsUpdated';
  const pages = {
    loginPersonalAccountReducer: {
      personAccountIsVisible: true,
    },
  };

  const setUp = () => shallow(
    <AddProductPage
      history={history}
      isProductsUpdated={isProductsUpdated}
      setIsProductsUpdated={setIsProductsUpdated}
      pages={pages}
    />,
  );
  let component;

  it('should Loading div at first rendering', async () => {
    component = setUp();
    expect(component.find('.-isLoading')).toHaveLength(1);
    expect(component.find('.addProduct-box')).toHaveLength(0);
  });

  it('should render PopUpErrorLoading component if error occurs', async () => {
    component = setUp();
    component.setState({ errorMessage: true });
    component.setState({ isLoading: true });
    expect(component.find('PopUpErrorLoading')).toHaveLength(1);
  });

  it('should render addProduct-box card if pages.loginPersonalAccountReducer.personAccountIsVisible is true', async () => {
    component = setUp();
    component.setState({ errorMessage: false });
    component.setState({ isLoading: true });
    expect(component.find('.addProduct-box')).toHaveLength(1);
  });

  it('should NOT render addProduct-box card if pages.loginPersonalAccountReducer.personAccountIsVisible is false', async () => {
    pages.loginPersonalAccountReducer.personAccountIsVisible = false;
    component = setUp();
    component.setState({ errorMessage: false });
    component.setState({ isLoading: true });
    expect(component.find('.addProduct-box')).toHaveLength(0);
  });
});
