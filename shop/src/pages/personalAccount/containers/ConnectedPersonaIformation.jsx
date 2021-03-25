import { connect } from 'react-redux';
import PersonaIformation from '../components/PersonaIformationComponent';

const ConnectedPersonaIformation = connect(
  (state) => ({
    pages: state,
  }),
)(PersonaIformation);

export default ConnectedPersonaIformation;
