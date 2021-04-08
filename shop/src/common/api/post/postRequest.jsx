import axios from 'axios';
import serverUrl from '../../constants/urls';

async function postRequest(url, payload, config = '') {
  const response = await axios.post(`${serverUrl}${url}`, payload, config);
  return response;
}

export default postRequest;
