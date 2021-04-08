import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import addRemoveScroll from './addRemoveScroll';

configure({ adapter: new Adapter() });

describe('should add/ remove scroll to the body', () => {
  const TestDiv = () => (
    <div className="testDiv">
      <button
        type="button"
        className="testButton"
        onClick={addRemoveScroll}
      >
        Click
      </button>
      ;
    </div>
  );

  const testDivTesting = shallow(<TestDiv />);

  it('should remove scroll', () => {
    document.body.setAttribute('class', '');
    const testButton = testDivTesting.find('.testButton');
    testButton.simulate('click');

    expect(document.body.className).toBe('-noOverflow');
  });

  it('should add scroll', () => {
    document.body.setAttribute('class', '-noOverflow');
    const testButton = testDivTesting.find('.testButton');
    testButton.simulate('click');

    expect(document.body.className).toBe('');
  });
});
