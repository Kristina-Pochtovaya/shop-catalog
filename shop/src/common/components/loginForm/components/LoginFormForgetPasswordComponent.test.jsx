import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginFormForgetPassword from './LoginFormForgetPasswordComponent';

configure({ adapter: new Adapter() });

describe('rendering LoginFormForgetPassword component', () => {
  const forgetPassword = shallow(<LoginFormForgetPassword />);
  const divRef = forgetPassword.find('.divCard');

  it('component shows if click inside', () => {
    expect(forgetPassword.find('BackSymbol')).toHaveLength(1);
  });

  it('component disappears when click outside', () => {
    divRef.simulate('click');
    expect(forgetPassword.find('svg')).toHaveLength(0);
  });
});
