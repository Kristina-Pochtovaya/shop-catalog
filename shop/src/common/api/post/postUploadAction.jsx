import postRequest from './postRequest';

const url = '/';

const postUploadAction = async (image) => {
  const fd = new FormData();
  fd.append('image', image);
  const config = {
    header: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const res = await postRequest(url, fd, config);
    console.log(res.data);
  } catch (err) {
    console.log(err.message);
  }
};

export default postUploadAction;
