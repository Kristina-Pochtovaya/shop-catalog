import setErrorNotNullFirstName from './setErrorNotNullFirstName';
import setErrorNotNullLastName from './setErrorNotNullLastName';
import setErrorNotNullEmail from './setErrorNotNullEmail';
import setErrorIncorrectLengthPhoneNumber from './setErrorIncorrectLengthPhoneNumber';
import setErrorNotNullAddress from './setErrorNotNullAddress';
import setErrorNotNullPassword from './setErrorNotNullPassword';
import setErrorNotNullPasswordNewRepeat from './setErrorNotNullPasswordNewRepeat';
import setErrorIncorrectLength from '../../../common/utils/setErrorIncorrectLength';

const setErrorNotNullGroupsRegistration = (
  firstName, lastName, email, errorLength, phoneNumber, address, password, passwordNewRepeat,
) => {
  if (!firstName) {
    setErrorNotNullFirstName();
  } if (!lastName) {
    setErrorNotNullLastName();
  } if (!email) {
    setErrorNotNullEmail();
  } if (phoneNumber.length < 13 || (phoneNumber.includes('_'))) {
    setErrorIncorrectLengthPhoneNumber();
  } if (!address) {
    setErrorNotNullAddress();
  } if (!password) {
    setErrorNotNullPassword();
  } if (password !== passwordNewRepeat) {
    setErrorNotNullPasswordNewRepeat();
  }
  if (password.length < 9) {
    setErrorIncorrectLength(errorLength);
  }
};

export default setErrorNotNullGroupsRegistration;
