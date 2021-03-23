import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputWitchCkeckingNotNull from './InputWitchCkeckingNotNullComponent';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const myUpdateData = jest.fn();
  const myOnEnterEmail = jest.fn();
  const myRemoveErrorNotNull = jest.fn();
  const myRemoveErrorLength = jest.fn();
  const initialValue = 'test';

  let component;

  it('should execute myUpdateData and removeErrorNotNull functions', () => {
    component = shallow(<InputWitchCkeckingNotNull
      initialValue={initialValue}
      classInput="test"
      classSymbol="test"
      updateData={myUpdateData}
      type="text"
      name="test"
      removeErrorNotNull={myRemoveErrorNotNull}
    />);
    component.find('input').simulate('change', { target: { value: { initialValue } } });
    expect(myUpdateData.mock.calls.length).toBe(1);
    expect(myRemoveErrorNotNull.mock.calls.length).toBe(1);
    expect(myOnEnterEmail.mock.calls.length).toBe(0);
    expect(myRemoveErrorLength.mock.calls.length).toBe(0);
  });

  it('should execute myOnEnterEmail and myRemoveErrorLength functions', () => {
    component = shallow(<InputWitchCkeckingNotNull
      initialValue={initialValue}
      classInput="test"
      classSymbol="test"
      updateData=""
      type="text"
      name="test"
      removeErrorNotNull=""
      removeErrorLength={myRemoveErrorLength}
      classerrorLength=""
      onEnterEmail={myOnEnterEmail}
    />);
    component.find('input').simulate('change', { target: { value: { initialValue } } });
    expect(myUpdateData.mock.calls.length).toBe(0);
    expect(myRemoveErrorNotNull.mock.calls.length).toBe(0);
    expect(myOnEnterEmail.mock.calls.length).toBe(1);
    expect(myRemoveErrorLength.mock.calls.length).toBe(1);
  });

  it('should set initial value', () => {
    component = shallow(<InputWitchCkeckingNotNull
      initialValue={initialValue}
      classInput="test"
      classSymbol="test"
      updateData=""
      type="text"
      name="test"
      removeErrorNotNull=""
      removeErrorLength={myRemoveErrorLength}
      classerrorLength=""
      onEnterEmail={myOnEnterEmail}
    />);

    expect(component.find('input').get(0).props.value).toEqual('test');
  });
});
