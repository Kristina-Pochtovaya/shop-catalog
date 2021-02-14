import React from 'react';
import { connect } from 'react-redux';
import actionsCounter from '../../../redux/actions/counterActions';

const Counter = ({ counter, onIncrease, onDecrease }) => (
  <div className="counter-box">
    <div
      className="plus"
      onClick={() => onIncrease()}
      onKeyDown={onIncrease}
      role="button"
      tabIndex="0"
    >
      +
    </div>
    <div
      className="counter"
    >
      {counter.counterReducer}
    </div>
    <div
      className="minus"
      onClick={() => onDecrease()}
      onKeyDown={onDecrease}
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
  }), (dispatch) => ({
    onIncrease: () => dispatch({ type: actionsCounter.INCREASE }),
    onDecrease: () => dispatch({ type: actionsCounter.DECREASE }),
  }),
)(Counter);

export default ConnectedCounter;
