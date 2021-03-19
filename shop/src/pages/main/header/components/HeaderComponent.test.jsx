import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Header from './HeaderComponent';
import aboutUS from '../../../../assets/header/about-us.png';

configure({ adapter: new Adapter() });

const pages = {
  loginPersonalAccountReducer: {
    loginFormIsVisible: true,
  },
};

const myMethod = jest.fn().mockImplementation(() => true, true, false);

test('should render Header Component', () => {
  const header = shallow(<Header
    linkItem={<button type="button" className="buttonBack">Назад</button>}
    link="/main-page"
    disabled
    pages={pages}
    onLogin={myMethod}
  />);

  expect(toJson(header)).toMatchSnapshot();
});

test('if componenent has props with element button, it renders it', () => {
  const header = shallow(<Header
    linkItem={<button type="button" className="buttonBack">Назад</button>}
    link="/main-page"
    pages={pages}
    onLogin={myMethod}
  />);

  expect(header.find('button')).toHaveLength(1);
});

test('if componenent has props with img element, it renders it', () => {
  const header = shallow(<Header
    linkItem={<img src={aboutUS} alt="О нас" />}
    link="/about"
    pages={pages}
    onLogin={myMethod}
  />);

  expect(header.find('img')).toHaveLength(3);
  expect(header.find('button')).toHaveLength(0);
});
