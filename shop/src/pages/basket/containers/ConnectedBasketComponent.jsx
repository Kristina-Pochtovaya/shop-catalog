import { connect } from 'react-redux';
import Basket from '../components/BasketComponent';

const ConnectedBusket = connect(
  (state) => ({
    items: state,
  }),
)(Basket);

export default ConnectedBusket;
