import { connect } from 'react-redux';
import { ADD } from '../../../redux/actions/catalogItemsActions';
import { CatalogItem } from '../components/CatalogItemComponent';

const ConnectedCatalogItem = connect(
  (state) => ({
    items: state,
  }),
  (dispatch) => ({
    onAdd: (item) => dispatch({
      type: ADD.type,
      payload: { item },
    }),
  }),
)(CatalogItem);

export default ConnectedCatalogItem;
