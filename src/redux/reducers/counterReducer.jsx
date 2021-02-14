import actionsCounter from '../actions/counterActions';

const initialState = 1;

function counterReducer(state = initialState, action) {
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

export default counterReducer;
