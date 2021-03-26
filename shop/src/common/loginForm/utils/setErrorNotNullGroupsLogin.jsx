import setErrorNotNullLogin from './setErrorNotNullLogin';
import setErrorNotNullPassword from './setErrorNotNullPassword';

function setErrorNotNullGroupsLogin(clientLogin, clientPassword) {
  if (!clientLogin) {
    setErrorNotNullLogin();
  }
  if (!clientPassword) {
    setErrorNotNullPassword();
  }
}

export default setErrorNotNullGroupsLogin;
