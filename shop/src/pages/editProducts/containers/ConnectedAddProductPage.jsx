import { connect } from 'react-redux';
import AddProductPage from '../components/AddProductPageComponent';

const ConnectedAddProductPage = connect(
  (state) => ({
    pages: state,
  }),
)(AddProductPage);

export default ConnectedAddProductPage;
