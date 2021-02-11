import actionsCounter from './counter.actions';

const initialState = 1;

function reducerCounter(state = initialState, action) {
  switch (action.type) {
    case actionsCounter.INCREASE:
      return state + 1;

    case actionsCounter.DECREASE:
      return state - 1;

    default:
      return initialState;
  }
}

export default reducerCounter;
