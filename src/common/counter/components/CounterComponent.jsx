import React from 'react';
import { connect } from 'react-redux';
import actionsCounter from '../../../redux/counter/counter.actions';

const Counter = ({ counter, dispatch }) => (
  <div className="counter-box">
    <div
      className="plus"
      onClick={() => dispatch({ type: actionsCounter.INCREASE })}
      onKeyDown={dispatch}
      role="button"
      tabIndex="0"
    >
      +
    </div>
    <div
      className="counter"
    >
      {counter}
    </div>
    <div
      className="minus"
      onClick={() => dispatch({ type: actionsCounter.DECREASE })}
      onKeyDown={dispatch}
      role="button"
      tabIndex="0"
    >
      -
    </div>
  </div>
);

const ConnectedCounter = connect(
  (state) => ({
    counter: state,
  }), (dispatch) => ({ dispatch }),
)(Counter);

export default ConnectedCounter;
