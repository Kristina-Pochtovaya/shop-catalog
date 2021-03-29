import axios from 'axios';
import serverUrl from '../../constants/urls';

async function getRequest(url) {
  const res = await axios.get(`${serverUrl}${url}`);
  return res;
}

export default getRequest;
