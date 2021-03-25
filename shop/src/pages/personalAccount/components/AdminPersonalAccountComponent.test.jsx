import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AdminPersonalAccount from './AdminPersonalAccountComponent';

configure({ adapter: new Adapter() });

describe('rendering LoginFormForgetPassword component', () => {
  const wrapper = shallow(<AdminPersonalAccount />);

  it('ir renders AdminPersonalAccountRows component by default', () => {
    expect(wrapper.find('AdminPersonalAccountRows')).toHaveLength(1);
    expect(wrapper.find('.connectedPersonaIformation')).toHaveLength(0);
  });

  it('ir renders ConnectedPersonaIformation after click on the button personalDataColumn', () => {
    wrapper.find('.personalDataColumn').simulate('click');

    expect(wrapper.find('ConnectedPersonaIformation')).toHaveLength(0);
    expect(wrapper.find('.connectedPersonaIformation')).toHaveLength(1);
  });
});
