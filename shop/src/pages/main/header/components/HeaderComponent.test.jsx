import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './HeaderComponent';

configure({ adapter: new Adapter() });
describe('rendering Header component', () => {
  const linkItem = 'linkItem';
  const link = 'link';
  let disabled;
  const pages = {
    loginPersonalAccountReducer: {
      loginIsVisible: 'true',
      loginFormIsVisible: 'true',
      loginFormLoginPageIsVisible: 'true',
      loginFormForgetPasswordIsVisible: 'true',
      personAccountIsVisible: 'true',
    },
  };
  const myOnLogin = jest.fn();

  let component;
  const setUp = () => shallow(<Header
    linkItem={linkItem}
    link={link}
    disabled={disabled}
    pages={pages}
    onLogin={myOnLogin}
  />);

  beforeEach(() => {
    disabled = false;
    pages.loginPersonalAccountReducer.loginIsVisible = 'true';
    pages.loginPersonalAccountReducer.loginFormIsVisible = 'true';
    pages.loginPersonalAccountReducer.loginFormLoginPageIsVisible = 'true';
    pages.loginPersonalAccountReducer.loginFormForgetPasswordIsVisible = 'true';
    pages.loginPersonalAccountReducer.personAccountIsVisible = 'true';
    component = setUp();
  });

  it('should set class basket if disabled prop is false ', () => {
    expect(component.find('.basket')).toHaveLength(1);
  });

  it('should set class basket  -disabled if disabled prop is true ', () => {
    disabled = true;
    component = setUp();
    expect(component.find('.basket.\-disabled')).toHaveLength(1);
  });

  it('should render the div .loginDiv if pages.loginPersonalAccountReducer.loginIsVisible is true', () => {
    expect(component.find('.loginDiv')).toHaveLength(1);
  });

  it('should not render the div .loginDiv if pages.loginPersonalAccountReducer.loginIsVisible is false', () => {
    pages.loginPersonalAccountReducer.loginIsVisible = 'false';
    component = setUp();
    expect(component.find('.loginDiv')).toHaveLength(0);
  });

  it('should call onLogin function after clicking on .buttonLogin button', () => {
    expect(myOnLogin).toHaveBeenCalledTimes(0);
    component.find('.buttonLogin').simulate('click');
    expect(myOnLogin).toHaveBeenCalledTimes(1);
  });

  it('should render ConnectedLoginForm if pages.loginPersonalAccountReducer.loginFormIsVisible and  pages.loginPersonalAccountReducer.loginFormLoginPageIsVisible are true', () => {
    expect(component.find('.connectedLoginForm')).toHaveLength(1);
  });

  it('should not render ConnectedLoginForm if pages.loginPersonalAccountReducer.loginFormIsVisible and  pages.loginPersonalAccountReducer.loginFormLoginPageIsVisible are false', () => {
    pages.loginPersonalAccountReducer.loginFormIsVisible = 'false';
    pages.loginPersonalAccountReducer.loginFormLoginPageIsVisible = 'false';
    component = setUp();
    expect(component.find('.connectedLoginForm')).toHaveLength(0);
  });

  it('should not render ConnectedLoginForm if pages.loginPersonalAccountReducer.loginFormIsVisible is false', () => {
    pages.loginPersonalAccountReducer.loginFormIsVisible = 'false';
    component = setUp();
    expect(component.find('.connectedLoginForm')).toHaveLength(0);
  });

  it('should render ConnectedLoginForm if pages.loginPersonalAccountReducer.loginFormIsVisible and  pages.loginPersonalAccountReducer.loginFormForgetPasswordIsVisible are true', () => {
    expect(component.find('.loginFormForgetPassword')).toHaveLength(1);
  });

  it('should render ConnectedLoginForm if pages.loginPersonalAccountReducer.loginFormIsVisible and  pages.loginPersonalAccountReducer.loginFormForgetPasswordIsVisible are false', () => {
    pages.loginPersonalAccountReducer.loginFormIsVisible = 'false';
    pages.loginPersonalAccountReducer.loginFormForgetPasswordIsVisible = 'false';
    component = setUp();
    expect(component.find('.loginFormForgetPassword')).toHaveLength(0);
  });

  it('should render ConnectedLoginForm if pages.loginPersonalAccountReducer.loginFormForgetPasswordIsVisible is false', () => {
    pages.loginPersonalAccountReducer.loginFormForgetPasswordIsVisible = 'false';
    component = setUp();
    expect(component.find('.loginFormForgetPassword')).toHaveLength(0);
  });

  it('should render .personalAccountDiv if pages.loginPersonalAccountReducer.personAccountIsVisible is true', () => {
    expect(component.find('.personalAccountDiv')).toHaveLength(1);
  });

  it('should not render .personalAccountDiv if pages.loginPersonalAccountReducer.personAccountIsVisible is false', () => {
    pages.loginPersonalAccountReducer.personAccountIsVisible = 'false';
    component = setUp();
    expect(component.find('.personalAccountDiv')).toHaveLength(0);
  });
});
