import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrdersHistory from './OrdersHistoryComponent';

configure({ adapter: new Adapter() });
describe('rendering OrdersHistory component', () => {
  const pages = {
    loginPersonalAccountReducer: [{ id: 1 }, { id: 2 }, { id: 3 }],
  };
  let component;
  const setUp = () => shallow(<OrdersHistory pages={pages} />);

  beforeEach(() => {
    component = setUp();
  });

  it('should Loading div at first rendering', async () => {
    expect(component.find('.-isLoading')).toHaveLength(1);
    expect(component.find('OrdersHistoryTable')).toHaveLength(0);
  });

  it('should render PopUpErrorLoading if error occurs', async () => {
    component.setState({ isLoading: false });
    component.setState({ errorMessage: 'error' });
    expect(component.find('.-isLoading')).toHaveLength(0);
    expect(component.find('PopUpErrorLoading')).toHaveLength(1);
  });
  it('should render OrdersHistoryTable if orders are loaded and there are no errors', async () => {
    component.setState({ isLoading: false });
    component.setState({ errorMessage: '' });
    expect(component.find('.-isLoading')).toHaveLength(0);
    expect(component.find('PopUpErrorLoading')).toHaveLength(0);
    expect(component.find('OrdersHistoryTable')).toHaveLength(1);
  });
});
