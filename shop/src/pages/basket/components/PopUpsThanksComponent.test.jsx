import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopUpThanks from './PopUpsThanksComponent';

configure({ adapter: new Adapter() });
describe('rendering PopUpThanks components', () => {
  let popupThanksActive = true;
  const mySetPopupThanksActive = jest.fn();
  const popupOrderActive = true;
  let component;
  const setUp = () => shallow(<PopUpThanks
    popupThanksActive={popupThanksActive}
    setPopupThanksActive={mySetPopupThanksActive}
    popupOrderActive={popupOrderActive}
  />);

  beforeEach(() => {
    component = setUp();
  });

  it('should render PopUp if popupOrderActive is true', () => {
    expect(component.find('PopUp')).toHaveLength(1);
  });

  it('should NO render PopUp if popupOrderActive is false', () => {
    popupThanksActive = false;
    component = setUp();
    expect(component.find('PopUp')).toHaveLength(0);
  });
});
