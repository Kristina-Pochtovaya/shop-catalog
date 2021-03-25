import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminPersonalAccountRows from './AdminPersonalAccountRowsComponent';

configure({ adapter: new Adapter() });

describe('rendering LoginFormForgetPassword component', () => {
  const buttonPersonalDataRow = jest.fn(() => true);
  const wrapper = shallow(<AdminPersonalAccountRows
    setIsPersonalInformationVisible={buttonPersonalDataRow}
  />);

  it('buttonPersonalDataRow was executed after clicking on the button buttonPersonalDataRow', () => {
    expect(buttonPersonalDataRow).toHaveBeenCalledTimes(0);

    wrapper.find('.personalDataRow').simulate('click');

    expect(buttonPersonalDataRow).toHaveBeenCalledTimes(1);
  });
});
