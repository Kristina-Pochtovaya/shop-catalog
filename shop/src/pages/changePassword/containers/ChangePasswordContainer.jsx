import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import ChangePassword from '../components/ChangePasswordComponent';

const ConnectedChangePassword = connect(
  (state) => ({
    pages: state,
  }),
)(ChangePassword);

export default withRouter(ConnectedChangePassword);
