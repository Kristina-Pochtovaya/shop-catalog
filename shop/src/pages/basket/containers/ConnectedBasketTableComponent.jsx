import { connect } from 'react-redux';
import {
  DELETEALL,
} from '../../../redux/actions/catalogItemsActions';
import BusketTable from '../components/BasketTableComponent';

const ConnectedBusketTable = connect(
  (state) => ({
    items: state,
  }),
  (dispatch) => ({
    OnDeleteAll: (items) => dispatch({
      type: DELETEALL.type,
      payload: { items },
    }),
  }),
)(BusketTable);

export default ConnectedBusketTable;
