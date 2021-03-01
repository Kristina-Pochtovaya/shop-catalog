import { connect } from 'react-redux';
import {
  ADDCLIENTINFORMATION,
} from '../../../redux/actions/catalogItemsActions';
import PopUpBasketOrder from '../components/PopUpBasketOrderComponent';

const ConnectedPopUpBasketOrder = connect(
  (state) => ({
    items: state,
  }),
  (dispatch) => ({
    onAddClientInformation: (clientName, clientPhone, clientAddress, clientMessage) => dispatch({
      type: ADDCLIENTINFORMATION.type,
      payload: {
        clientName, clientPhone, clientAddress, clientMessage,
      },
    }),
  }),
)(PopUpBasketOrder);

export default ConnectedPopUpBasketOrder;
