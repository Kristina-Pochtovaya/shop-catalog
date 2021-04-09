import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PopUpsError from './PopUpsErrorComponent';

configure({ adapter: new Adapter() });
describe('rendering PopUpsError components', () => {
  let popupSmthWentWrongActive = true;
  const mySetpopupSmthWentWrongActive = jest.fn();
  const popupOrderActive = true;
  let component;
  const setUp = () => shallow(<PopUpsError
    popupSmthWentWrongActive={popupSmthWentWrongActive}
    setpopupSmthWentWrongActive={mySetpopupSmthWentWrongActive}
    popupOrderActive={popupOrderActive}
  />);

  beforeEach(() => {
    component = setUp();
  });

  it('should render PopUp if popupOrderActive is true', () => {
    expect(component.find('PopUp')).toHaveLength(1);
  });

  it('should NO render PopUp if popupSmthWentWrongActive is false', () => {
    popupSmthWentWrongActive = false;
    component = setUp();
    expect(component.find('PopUp')).toHaveLength(0);
  });
});
