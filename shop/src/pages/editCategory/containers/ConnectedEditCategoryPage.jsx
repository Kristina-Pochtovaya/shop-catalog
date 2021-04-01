import { connect } from 'react-redux';
import EditCategoryPage from '../components/EditCategoryPageComponent';

const ConnectedEditCategoryPage = connect(
  (state) => ({
    pages: state,
  }),
)(EditCategoryPage);

export default ConnectedEditCategoryPage;
