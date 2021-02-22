import { connect } from 'react-redux';
import {
  INCREASE, DECREASE, DELETE,
} from '../../../redux/actions/catalogItemsActions';
import BasketTableColumns from '../components/BasketTableColumnsComponent';

const ConnectedBusketTableColumns = connect(
  (state) => ({
    items: state,
  }),
  (dispatch) => ({
    onIncrease: (itemId, counter) => dispatch({
      type: INCREASE.type,
      payload: { itemId, counter },
    }),
    onDecrease: (itemId, counter) => dispatch({
      type: DECREASE.type,
      payload: { itemId, counter },
    }),
    OnDelete: (itemId) => dispatch({
      type: DELETE.type,
      payload: { itemId },
    }),
  }),
)(BasketTableColumns);

export default ConnectedBusketTableColumns;
