import axios from 'axios';
import serverUrl from '../../constants/urls';

async function postRequest(url, payload) {
  const response = await axios.post(`${serverUrl}${url}`, payload);
  return response;
}

export default postRequest;
