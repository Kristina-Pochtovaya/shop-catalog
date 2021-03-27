import { connect } from 'react-redux';
import { ADDPHOTO } from '../../../redux/actions/loginPersonalAccountActions';
import ImageUpload from '../components/PhotoComponent';

const ConnectedImageUpload = connect(
  (state) => ({
    pages: state,
  }),
  (dispatch) => ({
    onAddPhoto: (photo) => dispatch({
      type: ADDPHOTO.type,
      payload: { photo },
    }),
  }),
)(ImageUpload);

export default ConnectedImageUpload;
