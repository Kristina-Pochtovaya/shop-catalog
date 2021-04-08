import { connect } from 'react-redux';
import OrdersHistory from '../components/OrdersHistoryComponent';

const ConnectedOrdersHistory = connect(
  (state) => ({
    pages: state,
  }),
)(OrdersHistory);

export default ConnectedOrdersHistory;
