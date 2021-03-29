import axios from 'axios';
import serverUrl from '../../constants/urls';

async function postRequestMultipartFormData(url, payload) {
  const response = await axios.post(`${serverUrl}${url}`, {
    payload,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
}

export default postRequestMultipartFormData;
