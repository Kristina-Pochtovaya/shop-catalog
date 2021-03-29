import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormAddImagePhoto from './FormAddImagePhotoComponent';

configure({ adapter: new Adapter() });

describe('rendering', () => {
  const myHandleSubmit = jest.fn();
  const imagePreview = 'test';
  const myHandleImageChange = jest.fn();
  const htmlFor = 'test';
  const name = 'test';

  const component = shallow(<FormAddImagePhoto
    handleSubmit={myHandleSubmit}
    imagePreview={imagePreview}
    handleImageChange={myHandleImageChange}
    htmlFor={htmlFor}
    name={name}
  />);

  it('the function myHandleSubmit should be exucted after submitting the form', () => {
    const form = component.find('#upload-container');
    expect(myHandleSubmit.mock.calls.length).toBe(0);
    form.simulate('submit');
    expect(myHandleSubmit.mock.calls.length).toBe(1);
  });

  it('the function myHandleImageChange should be exucted after chanching the input', () => {
    const input = component.find('.test');
    expect(myHandleImageChange.mock.calls.length).toBe(0);
    input.simulate('change');
    expect(myHandleImageChange.mock.calls.length).toBe(1);
  });
});
