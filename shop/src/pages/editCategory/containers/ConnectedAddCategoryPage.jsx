import { connect } from 'react-redux';
import AddCategoryPage from '../components/AddCategoryPageComponent';

const ConnectedAddCategoryPage = connect(
  (state) => ({
    pages: state,
  }),
)(AddCategoryPage);

export default ConnectedAddCategoryPage;
