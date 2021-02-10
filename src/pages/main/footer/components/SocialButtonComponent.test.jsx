import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import SocialButton from './SocialButtonComponent';

configure({ adapter: new Adapter() });

test('should render  Social Button Component with className=facebook, if prop(type)=facebook', () => {
  const socialButton = shallow(<SocialButton type="facebook" />);

  expect(toJson(socialButton)).toMatchSnapshot();
  expect(socialButton.find('.fa').hasClass('fa-facebook')).toEqual(true);
  expect(socialButton.find('.fa').hasClass('fa-instagram')).toEqual(false);
});

test('should render  Social Button Component with className=instagram, if prop(type)=instagram', () => {
  const socialButton = shallow(<SocialButton type="instagram" />);

  expect(socialButton.find('.fa').hasClass('fa-facebook')).toEqual(false);
  expect(socialButton.find('.fa').hasClass('fa-twitter')).toEqual(false);
  expect(socialButton.find('.fa').hasClass('fa-instagram')).toEqual(true);
});
