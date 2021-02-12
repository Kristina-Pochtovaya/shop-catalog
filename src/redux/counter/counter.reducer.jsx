import actionsCounter from './counter.actions';

const initialState = 1;

function reducerCounter(state = initialState, action) {
  switch (action.type) {
    case actionsCounter.INCREASE:
      return state + 1;

    case actionsCounter.DECREASE:
      if (state > 0) {
        return state - 1;
      } return state;

    default:
      return state;
  }
}

export default reducerCounter;
