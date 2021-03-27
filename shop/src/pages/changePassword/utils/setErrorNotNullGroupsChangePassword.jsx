import setErrorNotNullEmail from './setErrorNotNullEmail';
import setErrorNotNullPassword from './setErrorNotNullPassword';
import setErrorNotNullPasswordNewRepeat from './setErrorNotNullPasswordNewRepeat';
import setErrorIncorrectLength from '../../../common/untils/setErrorIncorrectLength';

const setErrorNotNullGroupsChangePassword = async (
  clientEmail, passwordNew, passwordNewRepeat, errorLength,
) => {
  if (!clientEmail) {
    setErrorNotNullEmail();
  } if (!passwordNew) {
    setErrorNotNullPassword();
  } if (passwordNew !== passwordNewRepeat) {
    setErrorNotNullPasswordNewRepeat();
  }
  if (passwordNew.length < 9) {
    setErrorIncorrectLength(errorLength);
  }
};

export default setErrorNotNullGroupsChangePassword;
