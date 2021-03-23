import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import addScroll from './addScroll';

configure({ adapter: new Adapter() });

describe('should add/ remove scroll to the body', () => {
  const TestDiv = () => (
    <div className="testDiv">
      <button
        type="button"
        className="testButton"
        onClick={addScroll}
      >
        Click
      </button>
      ;
    </div>
  );

  const testDivTesting = shallow(<TestDiv />);

  it('should add scroll if class not null', () => {
    document.body.setAttribute('id', 'body');
    document.body.setAttribute('class', '-noOverflow');
    const testButton = testDivTesting.find('.testButton');
    testButton.simulate('click');

    expect(document.body.className).toBe('');
  });

  it('should add scroll if class null', () => {
    document.body.setAttribute('id', 'body');
    document.body.setAttribute('class', '');
    const testButton = testDivTesting.find('.testButton');
    testButton.simulate('click');

    expect(document.body.className).toBe('');
  });
});
