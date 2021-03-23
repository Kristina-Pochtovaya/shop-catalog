import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonLogin from './ButtonLoginComponent';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const myHandleButtonClick = jest.fn();
  const onEnterEmail = jest.fn();
  const myOnLogin1 = jest.fn();
  const myOnLogin2 = jest.fn();
  let className = 'registrationButton';

  let component;

  it('should execute myOnLogin1 function and NOT myOnLogin2, if class is registrationButton and NOT exucute others functions if nothing in props for them', () => {
    component = shallow(<ButtonLogin
      className={className}
      handleButtonClick=""
      onEnterEmail=""
      onLogin={className === 'registrationButton' ? myOnLogin1 : myOnLogin2}
    />);
    component.simulate('click');
    expect(myOnLogin1.mock.calls.length).toBe(1);
    expect(myOnLogin2.mock.calls.length).toBe(0);
    expect(myHandleButtonClick.mock.calls.length).toBe(0);
    expect(onEnterEmail.mock.calls.length).toBe(0);
  });

  it('should NOT execute myHandleButtonClick function if class is null', () => {
    className = '';
    component = shallow(<ButtonLogin
      className={className}
      handleButtonClick=""
      onEnterEmail=""
      onLogin={className === 'registrationButton' ? myOnLogin1 : myOnLogin2}
    />);
    component.simulate('click');
    expect(myOnLogin2.mock.calls.length).toBe(1);
    expect(myOnLogin1.mock.calls.length).toBe(0);
  });

  it('should execute myHandleButtonClick  and onEnterEmail functions if something is in props', () => {
    component = shallow(<ButtonLogin
      className={className}
      handleButtonClick={myHandleButtonClick}
      onEnterEmail={onEnterEmail}
      onLogin={className === 'registrationButton' ? myOnLogin1 : myOnLogin2}
    />);
    component.simulate('click');
    expect(myHandleButtonClick.mock.calls.length).toBe(1);
    expect(onEnterEmail.mock.calls.length).toBe(1);
  });

  it('should render a children text', () => {
    component = shallow(<ButtonLogin>test</ButtonLogin>);
    expect(component.text()).toEqual('test');
  });
});
