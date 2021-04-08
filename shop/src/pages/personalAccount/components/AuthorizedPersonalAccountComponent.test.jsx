import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AuthorizedPersonalAccount from './AuthorizedPersonalAccountComponent';
import handleButtonOnClick from '../utils/handleButtonOnClick';

jest.mock('../utils/handleButtonOnClick');

configure({ adapter: new Adapter() });
describe('rendering AuthorizedPersonalAccount component', () => {
  const onEnter = jest.fn();
  const onLogin = jest.fn();
  const onDelete = jest.fn();
  const history = [];

  let component;

  const setUp = () => shallow(<AuthorizedPersonalAccount
    onEnter={onEnter}
    onLogin={onLogin}
    history={history}
    onDelete={onDelete}
  />);

  beforeEach(() => {
    component = setUp();
  });

  it('should render 4 buttons ', async () => {
    expect(component.find('button')).toHaveLength(4);
  });

  it('should run handleButtonOnClick after clicking on the button ', async () => {
    component.find('button').at(0).simulate('click');
    expect(handleButtonOnClick).toHaveBeenCalledTimes(1);
  });

  it('should render WithRouterAuthorizedPersonalAccountRows by default ', async () => {
    expect(component.find('.withRouterAuthorizedPersonalAccountRows')).toHaveLength(1);
    expect(component.find('.connectedPersonaIformation')).toHaveLength(0);
  });

  it('should render ConnectedPersonaIformation if isPersonalInformationVisible is set as true by default ', async () => {
    const myInitialState = true;
    React.useState = jest.fn().mockReturnValue([myInitialState, {}]);
    component = setUp();
    expect(component.find('.withRouterAuthorizedPersonalAccountRows')).toHaveLength(0);
    expect(component.find('.connectedPersonaIformation')).toHaveLength(1);
  });
});
