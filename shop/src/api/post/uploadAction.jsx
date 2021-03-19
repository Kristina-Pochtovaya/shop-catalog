import axios from 'axios';
import serverUrl from '../../common/constants/urls';

const url = '/';

const uploadAction = async (image) => {
  const fd = new FormData();
  fd.append('image', image);
  const config = {
    header: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const res = await axios.post(`${serverUrl}${url}`, fd, config);
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};

export default uploadAction;
