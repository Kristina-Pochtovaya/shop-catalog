import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopUpsWrapper from './PopUpsWrapperComponent';

configure({ adapter: new Adapter() });
describe('rendering PopUpsWrapper components', () => {
  let popupOrderActive = true;
  const mySetPopupOrderActive = jest.fn();
  const mySetPopupThanksActive = jest.fn();
  const mySetpopupSmthWentWrongActive = jest.fn();
  let component;
  const setUp = () => shallow(<PopUpsWrapper
    popupOrderActive={popupOrderActive}
    setPopupOrderActive={mySetPopupOrderActive}
    setPopupThanksActive={mySetPopupThanksActive}
    setpopupSmthWentWrongActive={mySetpopupSmthWentWrongActive}
  />);

  beforeEach(() => {
    component = setUp();
  });

  it('should render PopUp if popupOrderActive is true', () => {
    expect(component.find('PopUp')).toHaveLength(1);
  });

  it('should NO render PopUp if popupOrderActive is false', () => {
    popupOrderActive = false;
    component = setUp();
    expect(component.find('PopUp')).toHaveLength(0);
  });
});
