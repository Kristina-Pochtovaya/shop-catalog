import setErrorNotNull from './setErrorNotNull';

function setErrorNotNullGroupsLogin(
  clientLogin, clientLoginInput, clientLoginSymbol,
  clientPassword, clientPasswordInput, clientPasswordSymbol,
) {
  if (!clientLogin) {
    setErrorNotNull(clientLoginInput, clientLoginSymbol);
  }
  if (!clientPassword) {
    setErrorNotNull(clientPasswordInput, clientPasswordSymbol);
  }
}

export default setErrorNotNullGroupsLogin;
