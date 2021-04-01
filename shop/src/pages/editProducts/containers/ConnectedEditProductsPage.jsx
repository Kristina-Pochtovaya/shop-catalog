import { connect } from 'react-redux';
import EditProductsPage from '../components/EditProductsPageComponent';

const ConnectedEditProductsPage = connect(
  (state) => ({
    pages: state,
  }),
)(EditProductsPage);

export default ConnectedEditProductsPage;
